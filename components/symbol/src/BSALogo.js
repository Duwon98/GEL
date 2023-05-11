import React from 'react';
import { propTypes, Symbol } from './Symbol';

export const BSALogo = ({
	align = 'left',
	assistiveText = 'Bank SA',
	copyrightYear = '2020',
	viewBoxWidth = 90,
	viewBoxHeight = 41,
	...props
}) => (
	<Symbol
		symbol="BSALogo"
		align={align}
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		viewBoxWidth={viewBoxWidth}
		viewBoxHeight={viewBoxHeight}
		{...props}
	>
		<path
			d="M58 25.5c-0.9 0-2-0.5-2-1.5V2c0-1 1-2 2-2h30c1 0 2 1 2 2v38.2c0 0.5-0.4 0.8-0.9 0.8 -0.6 0-0.8-0.5-0.9-0.8C79.7 25.5 58.9 25.5 58 25.5z"
			fill="#E91B2B"
		/>
		<path
			d="M80 7l-2.1 8.5c0 0 0 0.1 0.1 0.1l4.4 0c0 0 0.1 0 0.1-0.1L80.4 7C80.3 6.6 80.1 6.6 80 7zM82.3 2.8c0.4 0 0.7 0.2 0.7 0.5l4.7 18.3c0.1 0.2 0.1 0.4 0.1 0.5 0 0.3-0.3 0.6-0.7 0.6l-2.3 0c-0.4 0-0.6-0.3-0.7-0.6l-0.9-3.5c0 0 0 0-0.1 0l-5.9 0c0 0 0 0-0.1 0l-0.9 3.5c-0.1 0.3-0.3 0.6-0.7 0.6l-2.3 0c-0.4 0-0.7-0.3-0.7-0.6 0 0 0-0.3 0.1-0.5l4.7-18.3c0.1-0.3 0.3-0.5 0.7-0.5L82.3 2.8z"
			fill="#fff"
		/>
		<path
			d="M62.3 7.5c0 1.4 0.7 1.9 2.3 2.8l3.5 2c2.4 1.4 3.3 2.9 3.3 5.5 0 3.5-2.7 5.3-6.5 5.3 -3.7 0-6.4-1.8-6.4-5.4l0-1.2c0-0.4 0.4-0.8 0.9-0.8l2 0c0.5 0 0.9 0.4 0.9 0.8l0 1.2c0 1.4 1.1 2.3 2.6 2.3 1.7 0 2.6-0.7 2.6-2.2h0c0-1.8-1.5-2.6-2.6-3.2L61 12.4c-1.8-1-2.5-3-2.5-4.6 0-3.5 2.6-5.6 6.5-5.6 3.7 0 6.4 1.9 6.4 5.5l0 0.6C71.4 8.7 71 9 70.5 9l-2 0c-0.5 0-0.9-0.4-0.9-0.8l0-0.6C67.6 6.2 66.7 5 65 5 63.3 5 62.3 5.9 62.3 7.5L62.3 7.5z"
			fill="#fff"
		/>
		<path
			d="M21.5 15.7C21.5 15.6 21.5 15.6 21.5 15.7l-3.6 1.4c-1 0.4-1.2 1.1-1.2 1.7 0 1 0.3 1.9 2.3 1.9 1.4 0 2.4-1 2.4-2.2L21.5 15.7zM13 19.2c0-2.3 1.2-3.6 3.1-4.3l3.8-1.4c1.2-0.4 1.6-0.8 1.6-1.6 0-1-0.8-1.7-2.2-1.7 -1.3 0-2.2 0.7-2.2 1.8l0 0c0 0.4-0.4 0.8-0.9 0.8l-1.7 0c-0.5 0-0.9-0.4-0.9-0.8l0 0c0-2.6 2.3-4.6 5.7-4.6 3.7 0 5.5 2.2 5.5 4.9l0 9.8c0 0.4-0.4 0.8-0.9 0.8l-1.7 0c-0.5 0-0.9-0.4-0.9-0.8l0-0.1c0-0.3-0.1-0.3-0.3-0.1 -0.9 0.9-2.2 1.4-3.6 1.4C15.6 23.2 13 22.2 13 19.2"
			fill="#002F6C"
		/>
		<path
			d="M41.1 3.8C41.1 3.4 41.5 3 42 3l1.7 0c0.5 0 0.9 0.4 0.9 0.8l0 9.6c0 0.3 0.1 0.3 0.3 0.1l3.9-4.6c0.3-0.4 0.5-0.6 1-0.6l2.1 0c0.5 0 0.8 0.2 0.8 0.5 0 0.1-0.1 0.4-0.2 0.5l-4.4 5.2c-0.1 0.1-0.1 0.2 0 0.2l5 7c0.1 0.2 0.1 0.3 0.1 0.4 0 0.4-0.4 0.7-0.9 0.7l-1.9 0c-0.5 0-0.8-0.4-1.1-0.8l-4.3-6.2c-0.2-0.3-0.3-0.2-0.3 0.1l0 6.1c0 0.4-0.4 0.8-0.9 0.8l-1.7 0c-0.5 0-0.9-0.4-0.9-0.8L41.1 3.8z"
			fill="#002F6C"
		/>
		<path
			d="M38.8 11.6c0-2.2-1.7-4.2-4.1-4.2 -1.5 0-2.8 0.6-3.5 1.6 -0.2 0.3-0.3 0.2-0.3-0.1V8.7c0-0.4-0.4-0.8-0.9-0.8l-1.7 0c-0.5 0-0.9 0.4-0.9 0.8l0 5v7.9h0l0 0.6c0 0.4 0.4 0.8 0.9 0.8l1.7 0c0.5 0 0.9-0.4 0.9-0.8l0-0.7v-9.9c0.3-0.5 0.9-1.1 1.7-1.3 0.2 0 0.4-0.1 0.6-0.1 0.7 0 1.2 0.2 1.6 0.6 0 0 0 0 0 0 0 0 0 0 0.1 0.1 0.3 0.3 0.5 0.7 0.5 1.1 0 0.2 0 0.3 0 0.5l0 9.7c0 0.4 0.4 0.8 0.9 0.8l1.7 0c0.5 0 0.9-0.4 0.9-0.8L38.8 11.6z"
			fill="#002F6C"
		/>
		<path
			d="M11.5 11.3c0-2.1-1.9-3.9-4.1-3.9C5.8 7.4 4.6 8 3.9 9 3.7 9.3 3.5 9.2 3.5 8.9l0-5.1C3.5 3.4 3.1 3 2.6 3L0.9 3C0.4 3 0 3.4 0 3.8l0 18.3c0 0.4 0.4 0.8 0.9 0.8l1.7 0c0.5 0 0.9-0.4 0.9-0.8v-0.2c0-0.3 0.1-0.4 0.3-0.1 0.7 1 2 1.4 3.5 1.4 2.3 0 4.1-1.6 4.1-4 0 0 0.1-1.5 0.1-3.9S11.5 11.3 11.5 11.3zM8 18.3c0 1.3-0.8 2.2-2.2 2.2 -0.9 0-1.9-0.6-2.2-1.4v-7.4c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.2 0.9 2.2 2.2 0 0 0 0.8 0 2.6C8 17.2 8 18.3 8 18.3z"
			fill="#002F6C"
		/>
	</Symbol>
);

BSALogo.propTypes = propTypes;
