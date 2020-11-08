/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { HouseIcon } from '@westpac/icon';
import { Grid, Cell, Name } from './_util';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Grid css={{ justifyItems: 'start' }}>
				<Cell>
					<HouseIcon />
					<Name>{`<HouseIcon\u00A0/>`}</Name>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
