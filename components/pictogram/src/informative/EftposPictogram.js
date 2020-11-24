import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const EftposPictogram = ({ mode, ...rest }) => {
	const brand = useBrand();
	const { outline, highlight } = colorMap(brand, mode);

	return (
		<Pictogram pictogram="EftposPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M55.4406,6.5005 C56.7616,6.5005 57.8356,7.5475 57.8356,8.8355 L57.8356,65.3235 C57.8356,66.6115 56.7616,67.6585 55.4406,67.6585 L55.3756,67.6585 L55.3756,6.5005 L55.4406,6.5005 Z M25.7214,62.97 C26.4114,62.97 26.9714,63.53 26.9714,64.22 C26.9714,64.91 26.4114,65.47 25.7214,65.47 L25.7214,65.47 L19.2764,65.47 C18.5864,65.47 18.0264,64.91 18.0264,64.22 C18.0264,63.53 18.5864,62.97 19.2764,62.97 L19.2764,62.97 Z M37.2761,62.97 C37.9661,62.97 38.5261,63.53 38.5261,64.22 C38.5261,64.91 37.9661,65.47 37.2761,65.47 L37.2761,65.47 L30.8311,65.47 C30.1411,65.47 29.5811,64.91 29.5811,64.22 C29.5811,63.53 30.1411,62.97 30.8311,62.97 L30.8311,62.97 Z M48.8312,62.97 C49.5212,62.97 50.0812,63.53 50.0812,64.22 C50.0812,64.91 49.5212,65.47 48.8312,65.47 L48.8312,65.47 L42.3862,65.47 C41.6962,65.47 41.1362,64.91 41.1362,64.22 C41.1362,63.53 41.6962,62.97 42.3862,62.97 L42.3862,62.97 Z M25.7214,58.3191 C26.4114,58.3191 26.9714,58.8791 26.9714,59.5691 C26.9714,60.2591 26.4114,60.8191 25.7214,60.8191 L25.7214,60.8191 L19.2764,60.8191 C18.5864,60.8191 18.0264,60.2591 18.0264,59.5691 C18.0264,58.8791 18.5864,58.3191 19.2764,58.3191 L19.2764,58.3191 Z M37.2761,58.3191 C37.9661,58.3191 38.5261,58.8791 38.5261,59.5691 C38.5261,60.2591 37.9661,60.8191 37.2761,60.8191 L37.2761,60.8191 L30.8311,60.8191 C30.1411,60.8191 29.5811,60.2591 29.5811,59.5691 C29.5811,58.8791 30.1411,58.3191 30.8311,58.3191 L30.8311,58.3191 Z M48.8312,58.3191 C49.5212,58.3191 50.0812,58.8791 50.0812,59.5691 C50.0812,60.2591 49.5212,60.8191 48.8312,60.8191 L48.8312,60.8191 L42.3862,60.8191 C41.6962,60.8191 41.1362,60.2591 41.1362,59.5691 C41.1362,58.8791 41.6962,58.3191 42.3862,58.3191 L42.3862,58.3191 Z M25.7214,53.6677 C26.4114,53.6677 26.9714,54.2277 26.9714,54.9177 C26.9714,55.6077 26.4114,56.1677 25.7214,56.1677 L25.7214,56.1677 L19.2764,56.1677 C18.5864,56.1677 18.0264,55.6077 18.0264,54.9177 C18.0264,54.2277 18.5864,53.6677 19.2764,53.6677 L19.2764,53.6677 Z M37.2761,53.6677 C37.9661,53.6677 38.5261,54.2277 38.5261,54.9177 C38.5261,55.6077 37.9661,56.1677 37.2761,56.1677 L37.2761,56.1677 L30.8311,56.1677 C30.1411,56.1677 29.5811,55.6077 29.5811,54.9177 C29.5811,54.2277 30.1411,53.6677 30.8311,53.6677 L30.8311,53.6677 Z M48.8312,53.6677 C49.5212,53.6677 50.0812,54.2277 50.0812,54.9177 C50.0812,55.6077 49.5212,56.1677 48.8312,56.1677 L48.8312,56.1677 L42.3862,56.1677 C41.6962,56.1677 41.1362,55.6077 41.1362,54.9177 C41.1362,54.2277 41.6962,53.6677 42.3862,53.6677 L42.3862,53.6677 Z M48.531,9.049 C49.386,9.049 50.081,9.76 50.081,10.635 L50.081,10.635 L50.081,49.652 C50.081,50.526 49.386,51.238 48.531,51.238 L48.531,51.238 L19.576,51.238 C18.721,51.238 18.027,50.526 18.027,49.652 L18.027,49.652 L18.027,10.635 C18.027,9.76 18.721,9.049 19.576,9.049 L19.576,9.049 Z M47.581,11.55 L20.526,11.55 L20.526,48.738 L47.581,48.738 L47.581,11.55 Z M17.9586,67.6585 C16.6386,67.6585 15.5636,66.6115 15.5636,65.3235 L15.5636,8.8355 C15.5636,7.5475 16.6386,6.5005 17.9586,6.5005 L52.8756,6.5005 L52.8756,67.6585 L17.9586,67.6585 Z M62.4836,9.3805 C62.4896,9.3775 62.5076,9.3705 62.5076,9.3705 C62.5076,9.3705 62.4086,9.1955 62.2186,8.9045 C62.2056,8.8855 62.1936,8.8665 62.1806,8.8475 C61.5916,7.9575 60.2306,6.1165 58.2866,4.8355 C57.9536,4.6165 57.6996,4.4965 57.5076,4.4535 C56.8766,4.1695 56.1806,4.0005 55.4406,4.0005 L17.9586,4.0005 C15.2246,4.0005 13.0006,6.1695 13.0006,8.8355 L13.0006,65.3235 C13.0006,66.0935 13.2016,66.8105 13.5306,67.4565 L13.5256,67.4585 C13.5256,67.4585 13.5606,67.5195 13.6216,67.6195 C13.7406,67.8325 13.8706,68.0365 14.0206,68.2285 C14.6736,69.1755 15.9526,70.7995 17.7126,71.9695 C18.5286,72.5455 19.5226,72.8945 20.6056,72.8945 L58.0876,72.8945 C60.8226,72.8945 63.0466,70.7255 63.0466,68.0595 L63.0466,11.5705 C63.0466,10.7785 62.8316,10.0405 62.4836,9.3805 L62.4836,9.3805 Z"
				/>
				<path
					fill={highlight}
					d="M28.3039,30.5846 C31.5419,27.2986 36.8479,27.2986 40.1109,30.5846 L41.8149,28.8806 C37.6029,24.6696 30.7869,24.6696 26.5999,28.8806 L28.3039,30.5846 Z"
				/>
				<path
					fill={highlight}
					d="M24.9449 27.1766C30.0569 22.0636 38.3579 22.0636 43.4699 27.1766L45.1739 25.5216C39.0879 19.4596 29.3259 19.4596 23.2649 25.5216L24.9449 27.1766zM31.7119 33.9196C33.0749 32.4826 35.3879 32.4826 36.7759 33.9196L38.4549 32.2156C36.0939 29.9026 32.3209 29.9026 30.0079 32.2156L31.7119 33.9196zM34.2199 35.0156C33.2699 35.0156 32.4669 35.7946 32.4669 36.7686 32.4669 37.6926 33.2699 38.4726 34.2199 38.4726 35.1689 38.4726 35.9479 37.6686 35.9479 36.7686 35.9479 35.7946 35.1689 35.0156 34.2199 35.0156L34.2199 35.0156z"
				/>
			</g>
		</Pictogram>
	);
};

EftposPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Eftpos',
	copyrightYear: '2020',
};
EftposPictogram.propTypes = propTypes;
