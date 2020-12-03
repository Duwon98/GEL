/** @jsx jsx */

import { forwardRef } from 'react';
import {
	jsx,
	useBrand,
	useMediaQuery,
	getLabel,
	classNames,
	getModifier,
	formatClassName,
} from '@westpac/core';

// ==============================
// Component
// ==============================

const Panel = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);

const BlenderPanel = forwardRef(({ state: _, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));

// ==============================
// Styles
// ==============================

const panelStyles = (_, { look, mode, last, selected, closed }) => {
	const { COLORS } = useBrand();

	const getStyles = (mode, look) => {
		switch (mode) {
			case 'accordion':
				return {
					borderWidth: '0 1px',
					borderBottomWidth: last && !closed && '1px',

					...(look === 'soft' &&
						last && {
							borderBottomLeftRadius: '0.1875rem',
							borderBottomRightRadius: '0.1875rem',
						}),
					...(look === 'lego' && {
						borderLeftWidth: '0.375rem',
					}),
				};

			case 'tabs':
				return {
					display: !selected ? 'none' : 'block',
					borderWidth: '1px',
				};

			default:
				return {};
		}
	};

	return {
		label: getLabel('tabcordion-panel'),
		overflow: 'hidden',
		border: `solid ${COLORS.border}`,
		...getStyles(mode, look),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { selected }) => {
	const mq = useMediaQuery();
	const props = { selected };
	const baseStyles = panelStyles(_, defaultProps);

	Object.assign(baseStyles, {
		display: 'none',
	});

	let modifiers = getModifier({ ...defaultProps, selected: false }, props);
	if (!modifiers.length) return mq(baseStyles)[0];

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, display: 'block' };
};

// ==============================
// Attributes
// ==============================

const panelAttributes = (_, { panelId, mode, hidden, selected }) => ({
	id: panelId,
	'aria-hidden': mode === 'accordion' ? hidden : !selected,
});

const blenderAttributes = (_, props) => ({
	...panelAttributes(_, props),
	className: classNames({ [`__convert__tabcordion-panel-selected`]: props.selected }),
});

// ==============================
// Exports
// ==============================

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

export const blenderPanel = {
	component: BlenderPanel,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
