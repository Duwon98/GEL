/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { Grid, Cell } from '@westpac/grid';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={6}>
					<Title>Medium (default)</Title>
					<FormCheck name="example-size-default">
						<Option value="1">Option 1</Option>
						<Option value="2">Option 2</Option>
						<Option value="3">Option 3</Option>
					</FormCheck>
				</Cell>
				<Cell width={6}>
					<Title>Large</Title>
					<FormCheck name="example-size-large" size="large">
						<Option value="1">Option 1</Option>
						<Option value="2">Option 2</Option>
						<Option value="3">Option 3</Option>
					</FormCheck>
				</Cell>
			</Grid>
		</Playground>
	);
};
