/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Wrapper, Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Cell left={2} width={11}>
					Column A
				</Cell>
			</Wrapper>
		</Playground>
	);
};
