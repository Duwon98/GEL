/** @jsx jsx */

import { GEL, jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useOutsideClick } from '@westpac/hooks';
import PropTypes from 'prop-types';

import { defaultModalWrapper } from './modalWrapper';
import { defaultModal } from '../overrides/modal';
import { defaultCloseBtn } from '../overrides/closeBtn';
import { defaultHeader } from '../overrides/header';
import { defaultHeading } from '../overrides/heading';
import pkg from '../../package.json';

// Non-Portal version of Modal for the blender
// Also adding an extra wrapper component to handle transition to replace react-spring

// ==============================
// Context and Consumer Hook
// ==============================

const ModalContext = createContext();

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('<Body/> and <Footer/> components should be wrapped in a <Modal>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Modal = ({
	heading,
	open: isOpen,
	onClose,
	size,
	dismissible,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const brand = useBrand();
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = brand;

	const [open, setOpen] = useState(isOpen);

	const defaultOverrides = {
		ModalWrapper: defaultModalWrapper,
		Modal: defaultModal,
		Header: defaultHeader,
		Heading: defaultHeading,
		CloseBtn: defaultCloseBtn,
	};

	const state = {
		open,
		heading,
		onClose,
		size,
		dismissible,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ModalWrapper: {
			component: ModalWrapper,
			styles: modalWrapperStyles,
			attributes: modalWrapperAttributes,
		},
		Modal: { component: Modal, styles: modalStyles, attributes: modalAttributes },
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
		CloseBtn: { component: CloseBtn, styles: closeBtnStyles, attributes: closeBtnAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const modalRef = useRef();
	const headingRef = useRef();

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleClose = () => {
		if (onClose) {
			onClose();
		} else {
			setOpen(false);
		}
	};

	// on escape close modal
	const keyHandler = (event) => {
		if (dismissible && open && event.keyCode === 27) handleClose();
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	useOutsideClick(modalRef, () => {
		if (dismissible) {
			handleClose();
		}
	});

	return (
		<ModalContext.Provider value={{ state }}>
			<ModalWrapper
				state={state}
				{...modalWrapperAttributes(state)}
				css={modalWrapperStyles(state)}
			>
				<Modal
					ref={modalRef}
					state={state}
					{...rest}
					{...modalAttributes(state)}
					css={modalStyles(state)}
				>
					<Header state={state} {...headerAttributes(state)} css={headerStyles(state)}>
						<Heading
							ref={headingRef}
							state={state}
							{...headingAttributes(state)}
							css={headingStyles(state)}
						>
							{heading}
						</Heading>
						{dismissible && (
							<CloseBtn
								onClick={() => handleClose()}
								state={state}
								{...closeBtnAttributes(state)}
								css={{ '&&': closeBtnStyles(state) }}
							/>
						)}
					</Header>
					{children}
				</Modal>
			</ModalWrapper>
		</ModalContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Modal.propTypes = {
	/**
	 * Modal heading text
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * State of whether the modal is open
	 */
	open: PropTypes.bool.isRequired,

	/**
	 * Callback function for handling modal state
	 */
	onClose: PropTypes.func,

	/**
	 * Size of the modal
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,

	/**
	 * Enable dismissible mode.
	 *
	 * Allows modal close via close button, background overlay click and Esc key.
	 */
	dismissible: PropTypes.bool,

	/**
	 * The content for this list group
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Modal: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ModalWrapper: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Backdrop: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Header: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		CloseBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	open: false,
	size: 'medium',
	dismissible: true,
};

Modal.defaultProps = defaultProps;
