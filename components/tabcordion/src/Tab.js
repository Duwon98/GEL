/** @jsx jsx */

import { useState, forwardRef, useEffect } from 'react';
import { jsx, useBrand, overrideReconciler, getLabel } from '@westpac/core';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill';
import useMeasure from 'react-use-measure';

import { defaultAccordionButton } from './overrides/accordionButton';
import { defaultAccordionButtonIcon } from './overrides/accordionButtonIcon';
import { defaultPanel } from './overrides/panel';
import { defaultPanelBody } from './overrides/panelBody';
import { useTabcordionContext } from './Tabcordion';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Tab = forwardRef(
	(
		{
			look,
			first,
			last,
			selected,
			text,
			mode,
			panelId,
			tabId,
			onClick,
			onOpen,
			onOpening,
			onClose,
			onClosing,
			idx,
			children,
			overrides,
			...rest
		},
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const context = useTabcordionContext();

		const [hidden, setHidden] = useState(!selected);
		const [initial, setInitial] = useState(true);
		const [measureRef, { height: panelBodyHeight }] = useMeasure({ polyfill: ResizeObserver });

		const defaultOverrides = {
			AccordionButton: defaultAccordionButton,
			AccordionButtonIcon: defaultAccordionButtonIcon,
			Panel: defaultPanel,
			PanelBody: defaultPanelBody,
		};

		const componentOverrides = overrides || context.state.overrides;

		const state = {
			hidden,
			look,
			first,
			last,
			selected,
			text,
			mode,
			panelId,
			onClick,
			onOpen,
			onOpening,
			onClose,
			onClosing,
			tabId,
			initial,
			idx,
			panelBodyHeight,
			context: context.state,
			overrides: componentOverrides,
			...rest,
		};

		const {
			AccordionButton: {
				component: AccordionButton,
				styles: accordionButtonStyles,
				attributes: accordionButtonAttributes,
			},
			AccordionButtonIcon: {
				component: AccordionButtonIcon,
				styles: accordionButtonIconStyles,
				attributes: accordionButtonIconAttributes,
			},
			Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
			PanelBody: { component: PanelBody, styles: panelBodyStyles, attributes: panelBodyAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		const handleAccordionClick = () => {
			setInitial(false);
			setHidden(!hidden);
			onClick();
		};

		useEffect(() => {
			setHidden(!selected);
		}, [mode]);

		useEffect(() => {
			if (mode === 'accordion') {
				if (!hidden) {
					onOpen({ idx, tabId });
				} else {
					onClose({ idx, tabId });
				}
			}
		}, [hidden, tabId]);

		useEffect(() => {
			if (mode === 'tabs') {
				if (selected) {
					onOpen({ idx, tabId });
				} else {
					onClose({ idx, tabId });
				}
			}
		}, [selected, tabId]);

		return (
			<div css={{ label: getLabel('tabcordion-item') }}>
				{mode === 'accordion' && (
					<AccordionButton
						onClick={handleAccordionClick}
						state={state}
						{...accordionButtonAttributes(state)}
						css={accordionButtonStyles(state)}
					>
						<span>{text}</span>
						<AccordionButtonIcon
							state={state}
							{...accordionButtonIconAttributes(state)}
							css={accordionButtonIconStyles(state)}
						/>
					</AccordionButton>
				)}

				<Panel ref={ref} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
					<PanelBody
						ref={measureRef}
						state={state}
						{...panelBodyAttributes(state)}
						css={panelBodyStyles(state)}
					>
						{children}
					</PanelBody>
				</Panel>
			</div>
		);
	}
);

// ==============================
// Types
// ==============================

Tab.propTypes = {
	/**
	 * The look of the tabs
	 */
	look: PropTypes.oneOf(['soft', 'lego']),

	/**
	 * Indicator if this is the first tab
	 */
	first: PropTypes.bool,

	/**
	 * Indicator if this is the last tab
	 */
	last: PropTypes.bool,

	/**
	 * Whether this tab/panel is selected/expanded
	 */
	selected: PropTypes.bool,

	/**
	 * The text label for this tab
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Render as either an accordion or tabs
	 */
	mode: PropTypes.oneOf(['accordion', 'tabs']),

	/**
	 * The id for this tab's panel
	 */
	panelId: PropTypes.string,

	/**
	 * The id for the tab
	 */
	tabId: PropTypes.string,

	/**
	 * The onClick handler for the accordion button
	 */
	onClick: PropTypes.func,

	/**
	 * Callback function run when a tab/panel is open.
	 */
	onOpen: PropTypes.func,

	/**
	 * Callback function run when a tab/panel is opening.
	 */
	onOpening: PropTypes.func,

	/**
	 * Callback function run when a tab/panel is closed.
	 */
	onClose: PropTypes.func,

	/**
	 * Callback function run when a tab/panel is closing.
	 */
	onClosing: PropTypes.func,

	/**
	 * The panel content for this tab
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AccordionButton: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AccordionButtonIcon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
