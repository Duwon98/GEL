/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Label as LabelWrapper, labelStyles } from './overrides/label';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Label = ({ position, size, data, overrides: componentOverrides, ...rest }) => {
	const {
		COLORS,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Label: {
				styles: labelStyles,
				component: LabelWrapper,
				attributes: state => state,
			},
		},
	};

	const state = {
		position,
		size,
		data,
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
		<overrides.subComponent.Label.component
			{...overrides.subComponent.Label.attributes(state)}
			css={overrides.subComponent.Label.styles}
		>
			{data}
		</overrides.subComponent.Label.component>
	);
};

// ==============================
// Types
// ==============================

Label.propTypes = {
	/**
	 * What position this component is at
	 */
	position: PropTypes.oneOf(['left', 'right']).isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

	/**
	 * The content of the component
	 */
	data: PropTypes.string.isRequired,
};

Label.defaultProps = {
	size: 'medium',
};
