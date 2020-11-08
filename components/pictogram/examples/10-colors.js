/** @jsx jsx */

import { GEL, jsx, css, useBrand } from '@westpac/core';
import * as components from '@westpac/pictogram';
import { Cell, Grid, Name } from './_util';

const informative = Object.keys(components).filter((s) => !s.startsWith('WBC'));
const colors = ['primary', 'hero', 'text', '#fff'];

function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<GEL brand={brand}>
			<h2>Informative pictograms</h2>
			{informative.map((pictogram) => {
				const Pictogram = components[pictogram];
				return (
					<Grid key={pictogram} css={{ marginBottom: 6 }}>
						<Cell>
							<Pictogram />
							<Name>{`<${pictogram}\u00A0/>`}</Name>
						</Cell>

						{colors.map((color) => (
							<Cell key={color} css={color === '#fff' && { backgroundColor: COLORS.hero }}>
								<Pictogram color={color} />
								<Name
									css={color === '#fff' && { color: '#fff' }}
								>{`<${pictogram} color="${color}"\u00A0/>`}</Name>
							</Cell>
						))}
					</Grid>
				);
			})}
		</GEL>
	);
}

export default Example;
