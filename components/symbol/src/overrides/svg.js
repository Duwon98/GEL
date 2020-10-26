/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Svg = ({ state: _, ...rest }) => <svg {...rest} />;

// ==============================
// Styles
// ==============================

const svgStyles = () => ({
	label: getLabel('symbol-svg'),
	width: '100%',
	height: '100%',
});

// ==============================
// Attributes
// ==============================

const svgAttributes = (_, { assistiveText, viewBoxWidth, viewBoxHeight }) => ({
	'aria-label': assistiveText,
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
	role: 'img',
	focusable: 'false',
});

// ==============================
// Exports
// ==============================

export const defaultSvg = {
	component: Svg,
	styles: svgStyles,
	attributes: svgAttributes,
};
