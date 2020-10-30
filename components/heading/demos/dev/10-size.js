/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Sizes</Title>
			<Heading size={1}>Heading size: 1</Heading>
			<Heading size={2}>Heading size: 2</Heading>
			<Heading size={3}>Heading size: 3</Heading>
			<Heading size={4}>Heading size: 4</Heading>
			<Heading size={5}>Heading size: 5</Heading>
			<Heading size={6}>Heading size: 6</Heading>
			<Heading size={7}>Heading size: 7</Heading>
			<Heading size={8}>Heading size: 8</Heading>
			<Heading size={9}>Heading size: 9</Heading>
			<Heading size={10}>Heading size: 10</Heading>
			<Title>Responsive sizing</Title>
			<Heading size={[10, 8, 6, 4, 2]}>Heading size: [10, 8, 6, 4, 2]</Heading>
		</Playground>
	);
};

export default Demo;
