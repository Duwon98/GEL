/** @jsx jsx */

import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';

// ==============================
// Component
// ==============================

const Link = ({ state: { disabled }, ...rest }) => (
	<button type="button" disabled={disabled} {...rest} />
);

const BlenderLink = ({ className, ...rest }) => (
	<Link className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const linkStyles = (_, { active, first, last, disabled }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('pagination-link'),
		appearance: 'none',
		marginLeft: -1,
		lineHeight: 1.15,
		display: 'inline-block',
		border: `1px solid ${active ? COLORS.hero : COLORS.border}`,
		backgroundColor: active ? COLORS.hero : '#fff',
		padding: '0.4375rem 0.75rem',
		fontSize: '0.875rem',
		color: active ? '#fff' : COLORS.text, //set default `COLORS.text` because this is a `<button />`
		textDecoration: 'none',
		cursor: 'pointer',
		transition: 'background .2s ease, border .2s ease',

		':hover': {
			backgroundColor: active ? COLORS.hero : COLORS.background,
		},

		...(first && {
			marginLeft: 0,
			borderTopLeftRadius: '0.1875rem',
			borderBottomLeftRadius: '0.1875rem',
		}),
		...(last && {
			borderTopRightRadius: '0.1875rem',
			borderBottomRightRadius: '0.1875rem',
		}),
		...(disabled && {
			color: COLORS.muted,
			backgroundColor: COLORS.light,
			cursor: 'not-allowed',
			opacity: '0.5',
		}),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { active = false, first = false, last = false, disabled = false }) => {
	const defaultProps = { active: false, first: false, last: false, disabled: false }; // defining defaultProps here since they are all calculated within Pagination
	const props = { active, first, last, disabled };
	const baseStyles = linkStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = linkStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	let modifier;

	if (modifiers.length > 1 && modifiers.includes('disabled')) {
		modifier = 'disabled';
	} else {
		modifier = modifiers[0];
	}

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const linkAttributes = (_, { active, assistiveText, disabled }) => ({
	'aria-current': active ? 'page' : undefined,
	'aria-label': disabled ? undefined : assistiveText,
	'aria-disabled': disabled, //a11y: required to aid VoiceOver/Talkback UX
});

const blenderAttributes = (_, { active, first, last, assistiveText, disabled }) => ({
	...linkAttributes(_, active, assistiveText, disabled),
	className: classNames({
		[`__convert__pagination-link-active`]: active,
		[`__convert__pagination-link-first`]: first,
		[`__convert__pagination-link-last`]: last,
		[`__convert__pagination-link-disabled`]: disabled,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultLink = {
	component: Link,
	styles: linkStyles,
	attributes: linkAttributes,
};

export const blenderLink = {
	component: BlenderLink,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
