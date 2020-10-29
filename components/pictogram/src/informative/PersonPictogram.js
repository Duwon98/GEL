import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const PersonPictogram = ({ mode, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[mode];

	return (
		<Pictogram pictogram="PersonPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M11.0083,70.6138 L12.4083,61.5538 L12.4313,61.4228 C12.8923,58.7648 14.7063,56.4798 17.2833,55.3088 C18.9823,54.5388 22.2633,53.0408 25.3243,51.5928 L27.7163,50.4488 C28.1483,50.2388 28.5623,50.0368 28.9533,49.8418 C30.1843,51.0458 34.1093,54.4438 39.3113,54.5178 C39.3693,54.5188 39.4273,54.5188 39.4863,54.5188 C43.0623,54.5188 46.4453,52.9238 49.5573,49.8068 C50.2323,50.1368 50.9683,50.4898 51.7473,50.8588 L54.1573,51.9838 C56.9103,53.2568 59.6883,54.5058 61.2073,55.1848 C63.7913,56.3398 65.6183,58.6148 66.0963,61.2758 L67.5703,70.4528 L11.0083,70.6138 Z M32.7083,46.6698 C33.2943,45.6138 33.6163,44.4358 33.7663,43.2758 C35.4403,44.4098 37.3373,45.1278 39.4753,45.1278 C41.4393,45.1278 43.1793,44.5748 44.7183,43.6738 C44.9833,45.2178 45.5273,46.5018 46.3223,47.5118 C46.6353,47.9078 46.9953,48.2398 47.3193,48.5008 C44.8033,50.8608 42.1693,52.0438 39.3653,52.0178 C35.6313,51.9718 32.5743,49.7188 31.1953,48.5058 C32.4263,47.4508 32.7083,46.6698 32.7083,46.6698 L32.7083,46.6698 Z M26.5493,27.2048 C26.9343,25.2968 29.0463,22.8498 31.1973,22.3648 C34.0273,21.5958 39.9333,23.0248 43.3033,17.7808 C45.5773,18.5498 47.9683,16.8728 50.1283,20.5308 C50.8863,22.2178 51.0023,23.9908 51.3233,26.0318 C51.2953,26.5118 51.6523,27.3488 52.0393,27.6808 C51.1763,30.7408 47.3153,42.6278 39.4753,42.6278 C31.4863,42.6278 27.0683,28.9168 26.5493,27.2048 L26.5493,27.2048 Z M71.3583,60.5278 L71.3283,60.3568 C70.6723,56.6398 68.1543,53.4628 64.5923,51.8588 C61.9373,50.6628 55.1613,48.4448 51.7473,46.7078 C48.5563,45.0848 47.3163,42.5308 47.3173,41.6718 C50.0043,39.0578 51.8623,35.4368 53.0373,32.5078 C53.1073,32.5738 53.1893,32.6178 53.2943,32.6178 C55.7723,32.6178 57.0083,28.9798 57.0083,27.6208 C57.0083,26.3188 56.2123,25.2638 55.2103,25.1778 C56.0643,23.8248 56.2823,22.5128 56.2823,22.5128 C57.0993,18.1358 56.0553,15.2538 54.3063,12.6518 C52.4393,9.8138 49.6613,7.8158 46.0443,8.2298 C45.1813,6.6688 43.7953,5.7128 42.1253,5.2258 C41.2893,4.9828 40.4173,4.9018 39.5463,4.8918 C38.4133,4.8778 37.2183,4.9458 36.0393,5.0358 C30.4173,5.4638 25.9773,8.3768 23.8483,12.5468 C22.2433,15.6818 21.4873,19.3478 22.4183,22.5428 C22.7043,23.5238 23.1263,24.4058 23.5783,25.1718 C22.5523,25.2278 21.7333,26.2978 21.7333,27.6208 C21.7333,28.9798 22.9693,32.6178 25.4463,32.6178 C25.6073,32.6178 25.7183,32.5278 25.7983,32.3828 C27.0073,35.1808 28.8683,38.6818 31.4333,41.3088 C31.4463,42.9938 31.1533,45.5218 29.4263,46.7648 C29.2733,46.8758 29.1073,46.9768 28.9303,47.0678 C25.4933,48.8268 18.9503,51.8178 16.2973,53.0218 C12.9653,54.5338 10.6163,57.5108 10.0173,60.9728 L8.1373,73.1108 L57.5823,72.9708 L73.3643,72.9708 L71.3583,60.5278 Z"
				/>
				<polygon
					fill={highlight}
					points="47.304 73.012 58.165 73.012 58.165 60.461 47.304 60.461"
				/>
			</g>
		</Pictogram>
	);
};

PersonPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Person',
};
PersonPictogram.propTypes = propTypes;
