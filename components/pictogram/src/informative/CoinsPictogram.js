import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const CoinsPictogram = ({ mode, ...rest }) => {
	const brand = useBrand();
	const { outline, highlight } = colorMap(brand, mode);

	return (
		<Pictogram pictogram="CoinsPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					fillRule="nonzero"
					d="M32,15.123752 C33.9177195,14.6301651 35.9282026,14.3676471 38,14.3676471 C40.0717974,14.3676471 42.0822805,14.6301651 44,15.123752 C45.9177195,14.6301651 47.9282026,14.3676471 50,14.3676471 C63.254834,14.3676471 74,25.1128131 74,38.3676471 C74,51.6224811 63.254834,62.3676471 50,62.3676471 C47.9282026,62.3676471 45.9177195,62.105129 44,61.6115421 C42.0822805,62.105129 40.0717974,62.3676471 38,62.3676471 C35.9282026,62.3676471 33.9177195,62.105129 32,61.6115421 C30.0822805,62.105129 28.0717974,62.3676471 26,62.3676471 C12.745166,62.3676471 2,51.6224811 2,38.3676471 C2,25.1128131 12.745166,14.3676471 26,14.3676471 C28.0717974,14.3676471 30.0822805,14.6301651 32,15.123752 L32,15.123752 Z M24.6628705,18.4116367 C14.2406232,19.0996068 6,27.7712766 6,38.3676471 C6,48.9640175 14.2406232,57.6356873 24.6628705,58.3236574 C25.1048295,58.3528305 25.5506845,58.3676471 26,58.3676471 C28.0904114,58.3676471 30.1059176,58.0469394 32,57.4520425 C40.1142139,54.9035152 46,47.3229306 46,38.3676471 C46,29.4123635 40.1142139,21.8317789 32,19.2832516 C30.1059176,18.6883547 28.0904114,18.3676471 26,18.3676471 C25.5506845,18.3676471 25.1048295,18.3824637 24.6628971,18.4116349 L24.6628705,18.4116367 Z M39.3371029,18.4116349 C45.7669118,22.71737 50,30.0481631 50,38.3676471 C50,46.687131 45.7669118,54.0179242 39.3371029,58.3236592 C49.7593628,57.635702 58,48.9640265 58,38.3676471 C58,27.7712676 49.7593628,19.0995921 39.3371029,18.4116349 L39.3371029,18.4116349 Z M51.3371029,18.4116349 C57.7669118,22.71737 62,30.0481631 62,38.3676471 C62,46.687131 57.7669118,54.0179242 51.3371029,58.3236592 C61.7593628,57.635702 70,48.9640265 70,38.3676471 C70,27.7712676 61.7593628,19.0995921 51.3371029,18.4116349 L51.3371029,18.4116349 Z"
				/>
				<path
					fill={highlight}
					fillRule="nonzero"
					d="M27.2,51.68 L24.08,51.68 L24.08,48.65 C21.5,48.32 18.98,47.3 17,45.8 L19.34,42.38 C20.96,43.61 22.46,44.45 24.23,44.81 L24.23,40.04 C19.91,38.87 17.78,37.19 17.78,33.65 C17.78,30.32 20.3,28.13 24.08,27.74 L24.08,26 L27.2,26 L27.2,27.8 C29.33,28.1 31.16,28.88 32.78,30.02 L30.77,33.53 C29.57,32.72 28.31,32.09 27.05,31.76 L27.05,36.29 C31.61,37.52 33.56,39.41 33.56,42.77 C33.56,46.1 31.01,48.29 27.2,48.71 L27.2,51.68 Z M24.23,35.54 L24.23,31.49 C22.79,31.7 22.16,32.42 22.16,33.38 C22.16,34.31 22.58,34.94 24.23,35.54 Z M27.05,44.96 C28.46,44.75 29.18,44.09 29.18,43.01 C29.18,41.99 28.67,41.36 27.05,40.76 L27.05,44.96 Z"
				/>
			</g>
		</Pictogram>
	);
};

CoinsPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Coins',
	copyrightYear: '2020',
};
CoinsPictogram.propTypes = propTypes;
