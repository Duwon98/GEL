/** @jsx jsx */

import { jsx, useMediaQuery, asArray, getLabel } from '@westpac/core';

const Pictogram = ({ state: _, ...rest }) => <span {...rest} />;

const pictogramStyles = (_, { width, height, viewBoxWidth, viewBoxHeight }) => {
	const mq = useMediaQuery();

	const round = (f) => Math.round(f * 10) / 10; // 1DP
	const ratio = viewBoxWidth / viewBoxHeight;

	// Size styling (responsive)
	const widthArr = asArray(width || viewBoxWidth);
	const heightArr = asArray(height || viewBoxHeight);
	const styleSize = {
		width: width ? widthArr : heightArr.map((h) => (h !== null ? round(h * ratio) : null)),
		height: width ? widthArr.map((w) => (w !== null ? round(w / ratio) : null)) : heightArr,
	};

	return mq({
		label: getLabel('pictogram'),
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',
		...styleSize,
	})[0];
};

const pictogramAttributes = () => null;

export const defaultPictogram = {
	component: Pictogram,
	styles: pictogramStyles,
	attributes: pictogramAttributes,
};
