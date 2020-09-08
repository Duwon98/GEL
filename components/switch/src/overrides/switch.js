/** @jsx jsx */

import {
	jsx,
	useMediaQuery,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
} from '@westpac/core';

import { defaultProps } from '../Switch';
import { nestedToggleStyles } from './toggle';
import { nestedLabelStyles } from './label';

// ==============================
// Component
// ==============================

const Switch = ({ state, ...rest }) => <label {...rest} />;

// ==============================
// Styles
// ==============================

const switchStyles = (_, { block, disabled }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('switch'),
		display: block ? 'flex' : 'inline-flex',
		verticalAlign: 'top',
		opacity: disabled && 0.5,
		width: block && '100%',
		flexWrap: 'wrap',
		alignItems: 'center',
		position: 'relative',
		marginRight: !block ? '1.125rem' : 'initial',
		marginBottom: '0.375rem',
		cursor: disabled ? 'not-allowed' : 'pointer',
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { block, disabled, size }) => {
	const props = { block, disabled, size };
	const baseStyles = switchStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = switchStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'size':
			label = `${label}-${size}`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	// returning an array here as nestedToggleStyles returns a css string, so letting emotion handle the merge of these
	return [{ label, ...reconciledStyles, ...nestedLabelStyles(props) }, nestedToggleStyles(props)];
};

// ==============================
// Attributes
// ==============================

const switchAttributes = (_, { instanceId }) => ({
	htmlFor: instanceId, //a11y: must use explicit association
});

const blenderAttributes = (_, { instanceId, block, disabled, size }) => ({
	...switchAttributes(_, { instanceId }),
	className: classNames({
		[`__convert__switch-${size}`]: size !== defaultProps.size,
		[`__convert__switch-block`]: block,
		[`__convert__switch-disabled`]: disabled,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultSwitch = {
	component: Switch,
	styles: switchStyles,
	attributes: switchAttributes,
};

export const blenderSwitch = {
	component: Switch,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
