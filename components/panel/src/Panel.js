/** @jsx jsx */

import { jsx, useBrand, devWarning, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, wrapperStyles } from './overrides/wrapper';
import pkg from '../package.json';

// ==============================
// Context and consumer hook
// ==============================

const PanelContext = createContext();

export const usePanelContext = () => {
	const context = useContext(PanelContext);

	devWarning(!context, 'Panel children should be wrapped in a <Panel>.');
	return context;
};

// ==============================
// Component
// ==============================

export const Panel = ({ look, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,
	};

	const state = {
		look,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<PanelContext.Provider value={{ look, overrides: componentOverrides }}>
			<overrides.component css={overrides.styles} {...overrides.attributes(state)} />
		</PanelContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Panel.propTypes = {
	/**
	 * Panel look
	 */
	look: PropTypes.oneOf(['hero', 'faint']).isRequired,

	/**
	 * Panel content
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Header: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Body: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Footer: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Panel.defaultProps = {
	look: 'hero',
};
