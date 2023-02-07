/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';
import {
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
	useId,
	useCallback,
	KeyboardEvent,
	useMemo,
} from 'react';
import { useOutsideClick, useIsomorphicLayoutEffect } from '@westpac/hooks';
import { Button } from '@westpac/button';
import PropTypes from 'prop-types';

import { defaultButtonDropdown } from './overrides/buttonDropdown';
import { defaultPanel } from './overrides/panel';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ButtonDropdownContext = createContext();

export const useButtonDropdownContext = () => {
	const context = useContext(ButtonDropdownContext);

	if (!context) {
		throw new Error('<Heading/> components should be wrapped in a <ButtonDropdown>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const ButtonDropdown = ({
	instanceId,
	open,
	text,
	dropdownSize,
	block,
	onClick = () => {},
	children,
	overrides: componentOverrides,
	...rest
}: typeof ButtonDropdown.propTypes & typeof ButtonDropdown.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [isOpen, setIsOpen] = useState<boolean>(open);
	const _id = useId();
	const id = useMemo(() => instanceId || `gel-button-dropdown-${_id}`, [_id, instanceId]);

	const panelRef = useRef();
	const buttonRef = useRef();

	const defaultOverrides = {
		ButtonDropdown: defaultButtonDropdown,
		Panel: defaultPanel,
	};

	const state = {
		id,
		isOpen,
		text,
		dropdownSize,
		block,
		onClick,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ButtonDropdown: {
			component: ButtonDropdown,
			styles: buttonDropdownStyles,
			attributes: buttonDropdownAttributes,
		},
		Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	useIsomorphicLayoutEffect(() => {
		if (!isOpen) {
			buttonRef.current.focus();
		}
	}, [isOpen]);

	const handleOpen = useCallback(
		(event: globalThis.KeyboardEvent) => {
			wrapHandlers(
				() => onClick(),
				() => {
					setIsOpen((currentState) => !currentState);
				}
			)(event);
		},
		[onClick]
	);

	useOutsideClick({
		handler: () => {
			setIsOpen(false);
		},
		refs: [buttonRef, panelRef],
		listenWhen: isOpen,
	});

	// on escape close
	const keyHandler = useCallback(
		(event: globalThis.KeyboardEvent) => {
			if (isOpen && event.keyCode === 27) handleOpen(event);
		},
		[handleOpen, isOpen]
	);

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', (event) => {});
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ButtonDropdownContext.Provider value={{ state }}>
			<ButtonDropdown
				state={state}
				{...buttonDropdownAttributes(state)}
				css={buttonDropdownStyles(state)}
			>
				<Button
					ref={buttonRef}
					aria-expanded={isOpen}
					aria-controls={id}
					onClick={handleOpen}
					dropdown={true}
					block={block}
					data-js="buttonDropdown-btn__version__"
					overrides={componentOverrides}
					{...rest}
				>
					{text}
				</Button>
				<Panel ref={panelRef} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
					{children}
				</Panel>
			</ButtonDropdown>
		</ButtonDropdownContext.Provider>
	);
};

// ==============================
// Types
// ==============================

ButtonDropdown.propTypes = {
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * State of whether the Popover is open
	 */
	open: PropTypes.bool,

	/**
	 * Button text
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Dropdown size
	 */
	dropdownSize: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large'])),
	]),

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ButtonDropdown: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	open: false,
	dropdownSize: 'medium',
	block: false,
};

ButtonDropdown.defaultProps = defaultProps;