import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const MoneyOutPictogram = ({ mode, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[mode];

	return (
		<Pictogram pictogram="MoneyOutPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M63.5,54.6001 C58.16,62.6171 49.043,67.9121 38.711,67.9121 C22.297,67.9121 8.943,54.5581 8.943,38.1441 C8.943,21.7301 22.297,8.3771 38.711,8.3771 C50.842,8.3771 61.295,15.6751 65.927,26.1091 L68.458,24.8951 C67.699,23.4541 66.84,22.0731 65.88,20.7701 C60.139,11.8221 50.109,5.8751 38.711,5.8751 C20.919,5.8751 6.443,20.3501 6.443,38.1431 C6.443,45.2761 8.773,51.8731 12.709,57.2211 C18.449,66.1751 28.481,72.1251 39.885,72.1251 C51.347,72.1251 61.425,66.1131 67.15,57.0811 L63.5,54.6001 Z"
				/>
				<path
					fill={outline}
					d="M54.1396,23.9019 L54.1396,53.9389 C54.1396,54.2009 54.2436,54.4499 54.4266,54.6329 C54.8086,55.0199 55.4266,55.0199 55.8076,54.6329 L70.7136,39.6149 C71.0956,39.2319 71.0956,38.6089 70.7136,38.2239 L55.8076,23.2049 C55.6236,23.0199 55.3766,22.9179 55.1176,22.9179 C54.5776,22.9179 54.1396,23.3589 54.1396,23.9019"
				/>
				<path
					fill={highlight}
					d="M39.8428,46.6279 C39.3658,47.1899 38.7718,47.5779 38.0698,47.8049 L38.0698,40.6979 C38.9228,41.0129 39.5708,41.4199 39.9858,41.9299 C40.4888,42.5469 40.7398,43.2819 40.7398,44.1349 C40.7398,45.0899 40.4418,45.9199 39.8428,46.6279 M32.8908,32.8389 C32.4838,32.2599 32.2798,31.6319 32.2798,30.9579 C32.2798,30.2189 32.5028,29.5439 32.9478,28.9329 C33.3458,28.3879 33.8708,27.9929 34.5108,27.7319 L34.5108,34.1269 C33.8038,33.7859 33.2578,33.3599 32.8908,32.8389 M43.7578,38.3779 C42.7198,37.1419 40.8168,36.1259 38.0698,35.3219 L38.0698,28.0179 C38.9688,28.5979 39.5608,29.4939 39.8048,30.7469 L44.6358,30.1169 C44.3048,28.2069 43.5408,26.6829 42.3448,25.5439 C41.2628,24.5139 39.8248,23.8709 38.0698,23.5739 L38.0698,21.5799 L37.5128,21.5799 L34.7428,21.5799 L34.5108,21.5799 L34.5108,23.5119 C32.4338,23.7639 30.7498,24.5589 29.4818,25.9249 C28.1638,27.3449 27.5048,29.0989 27.5048,31.1869 C27.5048,33.2489 28.0868,35.0029 29.2518,36.4479 C30.3798,37.8469 32.1368,38.8989 34.5108,39.6119 L34.5108,47.5549 C33.9158,47.2209 33.3668,46.7359 32.8718,46.0829 C32.3118,45.3449 31.9298,44.4659 31.7258,43.4469 L26.7408,43.9819 C27.1228,46.4899 28.0018,48.4319 29.3768,49.8069 C30.7008,51.1309 32.4188,51.9289 34.5108,52.2259 L34.5108,55.7469 L34.7428,55.7469 L37.5128,55.7469 L38.0698,55.7469 L38.0698,52.0759 C40.2838,51.6599 42.0398,50.7299 43.3268,49.2729 C44.7218,47.6929 45.4188,45.7519 45.4188,43.4469 C45.4188,41.3849 44.8648,39.6939 43.7578,38.3779"
				/>
			</g>
		</Pictogram>
	);
};

MoneyOutPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Money out',
	copyrightYear: '2020',
};
MoneyOutPictogram.propTypes = propTypes;