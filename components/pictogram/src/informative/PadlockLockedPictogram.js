import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const PadlockLockedPictogram = ({ mode, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[mode];

	return (
		<Pictogram pictogram="PadlockLockedPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M43.3732,45.7012 C43.3732,42.1112 40.4632,39.2012 36.8732,39.2012 C33.2832,39.2012 30.3732,42.1112 30.3732,45.7012 C30.3732,48.0012 31.5712,50.0172 33.3732,51.1732 L33.3732,56.7012 C33.3732,58.6342 34.9402,60.2012 36.8732,60.2012 C38.8062,60.2012 40.3732,58.6342 40.3732,56.7012 L40.3732,51.1732 C42.1762,50.0172 43.3732,48.0012 43.3732,45.7012"
				/>
				<path
					fill={outline}
					d="M57.2682,63.1953 C57.2682,65.5683 55.3382,67.4983 52.9662,67.4983 L19.8032,67.4983 C17.4302,67.4983 15.5002,65.5683 15.5002,63.1953 L15.5002,30.9983 L57.2682,30.9983 L57.2682,63.1953 Z M24.3842,22.7083 C24.3842,15.1493 30.2152,9.0003 37.3842,9.0003 C44.5522,9.0003 50.3842,15.1493 50.3842,22.7083 L50.3842,28.4983 L24.3842,28.4983 L24.3842,22.7083 Z M62.9972,32.3353 L62.9982,32.3313 L59.1862,29.0623 L59.1852,29.0633 C58.8322,28.7153 58.3492,28.4983 57.8152,28.4983 L54.3842,28.4983 L54.3842,22.7083 C54.3842,12.9443 46.7582,5.0003 37.3842,5.0003 C28.0102,5.0003 20.3842,12.9443 20.3842,22.7083 L20.3842,28.4983 L14.9392,28.4983 C13.8702,28.4983 13.0002,29.3683 13.0002,30.4373 L13.0002,63.1953 C13.0002,63.3293 13.0122,63.4603 13.0202,63.5913 C13.0192,63.5913 13.0122,63.5893 13.0122,63.5893 C13.0122,63.5893 13.0172,63.6983 13.0352,63.8863 C13.0352,63.8883 13.0352,63.8913 13.0362,63.8943 C13.1832,65.3883 14.2892,71.9863 22.2362,73.1483 C22.6912,73.2443 23.1622,73.2963 23.6452,73.2963 L56.8082,73.2963 C60.5592,73.2963 63.6112,70.2453 63.6112,66.4943 L63.6112,33.7503 C63.6112,33.1923 63.3722,32.6913 62.9972,32.3353 L62.9972,32.3353 Z"
				/>
			</g>
		</Pictogram>
	);
};

PadlockLockedPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Padlock locked',
};
PadlockLockedPictogram.propTypes = propTypes;
