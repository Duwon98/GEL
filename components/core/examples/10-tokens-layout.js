/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const { LAYOUT } = useBrand();

	return (
		<Playground context={context} brand={brand}>
			<Intopia ignore />
			<h2>Layout</h2>
			Breakpoints:
			<ul
				css={{
					listStyle: 'none',
					margin: 0,
					padding: 0,
				}}
			>
				{Object.entries(LAYOUT.breakpoints).map(([name, breakpoint], i) => (
					<li key={i}>
						{name}: {breakpoint}px
					</li>
				))}
			</ul>
		</Playground>
	);
}

export default Example;
