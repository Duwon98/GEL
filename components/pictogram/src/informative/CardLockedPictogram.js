import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const CardLockedPictogram = ({ mode, ...rest }) => {
	const brand = useBrand();
	const { outline, highlight } = colorMap(brand, mode);

	return (
		<Pictogram pictogram="CardLockedPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M53.6375,53.8881 C53.6375,51.7781 51.9275,50.0671 49.8165,50.0671 C47.7065,50.0671 45.9955,51.7781 45.9955,53.8881 C45.9955,55.2401 46.6995,56.4251 47.7595,57.1041 L47.7595,60.3541 C47.7595,61.4911 48.6805,62.4111 49.8165,62.4111 C50.9525,62.4111 51.8735,61.4911 51.8735,60.3541 L51.8735,57.1041 C52.9335,56.4251 53.6375,55.2401 53.6375,53.8881"
				/>
				<polygon
					fill={highlight}
					points="11.487 36.207 31.808 36.207 31.808 33.207 11.487 33.207"
				/>
				<polygon
					fill={highlight}
					points="11.487 43.196 25.785 43.196 25.785 40.196 11.487 40.196"
				/>
				<path
					fill={outline}
					d="M68.9295,17.1381 L6.4995,17.1381 L6.4995,13.7821 C6.4995,12.4941 7.5475,11.4471 8.8345,11.4471 L66.5945,11.4471 C67.8815,11.4471 68.9295,12.4941 68.9295,13.7821 L68.9295,17.1381 Z M68.9295,50.3331 C68.9295,51.6201 67.8815,52.6681 66.5945,52.6681 L64.0775,52.6681 L64.0775,43.5261 L59.8845,43.5261 L59.8845,42.2801 C59.8845,36.4991 55.3675,31.7961 49.8165,31.7961 C44.2655,31.7961 39.7485,36.4991 39.7485,42.2801 L39.7485,43.5261 L35.5555,43.5261 L35.5555,52.6681 L8.8345,52.6681 C7.5475,52.6681 6.4995,51.6201 6.4995,50.3331 L6.4995,27.2091 L68.9295,27.2091 L68.9295,50.3331 Z M42.2485,43.5261 L42.2485,42.2801 C42.2485,37.8781 45.6435,34.2961 49.8165,34.2961 C53.9895,34.2961 57.3845,37.8781 57.3845,42.2801 L57.3845,43.5261 L42.2485,43.5261 Z M61.5775,62.1501 C61.5775,64.5221 59.6475,66.4521 57.2745,66.4521 L42.3575,66.4521 C39.9855,66.4521 38.0545,64.5221 38.0545,62.1501 L38.0545,46.0261 L61.5775,46.0261 L61.5775,62.1501 Z M73.2945,13.5951 C71.5495,11.0341 68.7845,9.5131 68.7845,9.5131 C68.7845,9.5131 68.7755,9.5331 68.7725,9.5421 C68.1145,9.2071 67.3825,9.0001 66.5945,9.0001 L8.8345,9.0001 C6.1685,9.0001 3.9995,11.1691 3.9995,13.8351 L3.9995,50.3861 C3.9995,51.0571 4.1385,51.6971 4.3875,52.2791 C4.4165,52.4711 4.5285,52.7301 4.7715,53.0911 C6.5155,55.6721 9.3065,57.2071 9.3065,57.2071 C9.3065,57.2071 9.3125,57.1911 9.3145,57.1881 C10.0045,57.5671 10.7835,57.8021 11.6245,57.8021 L35.5555,57.8021 L35.5555,62.1501 C35.5555,65.9011 38.6065,68.9521 42.3575,68.9521 L57.2755,68.9521 C61.0265,68.9521 64.0775,65.9011 64.0775,62.1501 L64.0775,57.8021 L69.3845,57.8021 C72.0515,57.8021 74.2205,55.6331 74.2205,52.9671 L74.2205,16.4161 C74.2205,15.3611 73.8715,14.3911 73.2945,13.5951 L73.2945,13.5951 Z"
				/>
			</g>
		</Pictogram>
	);
};

CardLockedPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Locked card',
	copyrightYear: '2020',
};
CardLockedPictogram.propTypes = propTypes;
