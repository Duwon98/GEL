/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Body, bodyStyles } from './overrides/body';
import { useModalContext } from './Modal';
import pkg from '../package.json';

export const ModalBody = ({ children, overrides: componentOverrides, ...rest }) => {
	const { bodyId } = useModalContext();
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Body: {
			styles: bodyStyles,
			component: Body,
			attributes: () => null,
		},
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Body.component
			id={bodyId}
			{...rest}
			{...overrides.Body.attributes(state)}
			css={overrides.Body.styles(state)}
		>
			{children}
		</overrides.Body.component>
	);
};

// ==============================
// Types
// ==============================
ModalBody.propTypes = {
	/**
	 * The content for this list group
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Body: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
