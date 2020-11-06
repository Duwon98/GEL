/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Wrapper, Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Cell width={12}>Column A</Cell>
				<Cell width={12}>Column B</Cell>
				<Cell width={12}>Column C</Cell>
			</Wrapper>
		</Playground>
	);
};
