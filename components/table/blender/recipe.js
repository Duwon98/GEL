import { GEL } from '@westpac/core';
import React from 'react';
import { Table, Caption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@westpac/table';

import { blenderTable } from '../src/overrides/table';
import { blenderTd } from '../src/overrides/td';
import { blenderTfoot } from '../src/overrides/tfoot';
import { blenderTh } from '../src/overrides/th';
import { blenderThead } from '../src/overrides/thead';
import { blenderTr } from '../src/overrides/tr';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/table'] = {
		Table: {
			component: blenderTable.component,
			styles: blenderTable.styles,
		},
		Td: {
			styles: blenderTd.styles,
		},
		Tfoot: {
			styles: blenderTfoot.styles,
		},
		Th: {
			styles: blenderTh.styles,
		},
		Thead: {
			styles: blenderThead.styles,
		},
		Tr: {
			styles: blenderTr.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<Table>
				<Caption>Table caption</Caption>
				<Thead>
					<Tr>
						<Th>Column 1</Th>
						<Th>Column 2</Th>
						<Th>Column 3</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Cell 1</Td>
						<Td>Cell 7</Td>
						<Td>Cell 13</Td>
					</Tr>
					<Tr>
						<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
						<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
						<Td>Rem saepe eos, modi perferendis.</Td>
					</Tr>
					<Tr>
						<Td>Cell 3</Td>
						<Td>Cell 9</Td>
						<Td>Cell 15</Td>
					</Tr>
					<Tr>
						<Td>Cell 4</Td>
						<Td>Cell 10</Td>
						<Td>Cell 16</Td>
					</Tr>
					<Tr>
						<Td>Cell 5</Td>
						<Td>Cell 11</Td>
						<Td>Cell 17</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Td>Footer goes here and should colSpan all columns</Td>
					</Tr>
				</Tfoot>
			</Table>
			<Table striped>
				<Caption>Table caption this table width is</Caption>
				<Thead>
					<Tr>
						<Th>Column 1</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Cell 1</Td>
					</Tr>
					<Tr>
						<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
						<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
						<Td>Rem saepe eos, modi perferendis.</Td>
					</Tr>
					<Tr>
						<Td>Cell 3</Td>
					</Tr>
					<Tr>
						<Td>Cell 4</Td>
					</Tr>
					<Tr>
						<Td>Cell 5</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
					</Tr>
				</Tfoot>
			</Table>
			<Table bordered>
				<Caption>Table caption this table width is</Caption>
				<Thead>
					<Tr>
						<Th>Column 1</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Cell 1</Td>
					</Tr>
					<Tr>
						<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
						<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
						<Td>Rem saepe eos, modi perferendis.</Td>
					</Tr>
					<Tr>
						<Td>Cell 3</Td>
					</Tr>
					<Tr>
						<Td>Cell 4</Td>
					</Tr>
					<Tr>
						<Td>Cell 5</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Td>Footer goes here and should colSpan all columns</Td>
					</Tr>
				</Tfoot>
			</Table>
			<Table>
				<Caption>Table caption this table width is</Caption>
				<Thead>
					<Tr>
						<Th>Column 1</Th>
						<Th>Column 2</Th>
						<Th>Column 3</Th>
						<Th>Column 4</Th>
						<Th>Column 5</Th>
						<Th>Column 6</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Cell 1</Td>
						<Td>Cell 7</Td>
						<Td>Cell 13</Td>
						<Td>Cell 1</Td>
						<Td>Cell 7</Td>
						<Td>Cell 13</Td>
					</Tr>
					<Tr highlighted>
						<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
						<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
						<Td>Rem saepe eos, modi perferendis.</Td>
						<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
						<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
						<Td>Rem saepe eos, modi perferendis.</Td>
					</Tr>
					<Tr>
						<Td>Cell 3</Td>
						<Td>Cell 9</Td>
						<Td>Cell 15</Td>
						<Td>Cell 3</Td>
						<Td>Cell 9</Td>
						<Td>Cell 15</Td>
					</Tr>
					<Tr highlighted={[0, [2, 4]]}>
						<Td>Cell 4</Td>
						<Td>Cell 10</Td>
						<Td>Cell 16</Td>
						<Td>Cell 4</Td>
						<Td>Cell 10</Td>
						<Td>Cell 16</Td>
					</Tr>
					<Tr>
						<Td>Cell 5</Td>
						<Td>Cell 11</Td>
						<Td>Cell 17</Td>
						<Td>Cell 5</Td>
						<Td>Cell 11</Td>
						<Td>Cell 17</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Td>Footer goes here and should colSpan all columns</Td>
					</Tr>
				</Tfoot>
			</Table>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/table'] = {
		Table: {
			component: blenderTable.component,
			attributes: blenderTable.attributes,
		},
		Td: {
			attributes: blenderTd.attributes,
		},
		Tr: {
			attributes: blenderTr.attributes,
		},
	};
	return [
		{
			heading: 'A table',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Table>
						<Caption>Table caption</Caption>
						<Thead>
							<Tr>
								<Th scope="col">Column 1</Th>
								<Th scope="col">Column 2</Th>
								<Th scope="col">Column 3</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
							</Tr>
							<Tr>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
							</Tr>
							<Tr>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
							</Tr>
							<Tr>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
							</Tr>
							<Tr>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
							</Tr>
						</Tfoot>
					</Table>
				</GEL>
			),
		},
		{
			heading: 'A striped table',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Table striped>
						<Caption>Table caption</Caption>
						<Thead>
							<Tr>
								<Th scope="col">Column 1</Th>
								<Th scope="col">Column 2</Th>
								<Th scope="col">Column 3</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
							</Tr>
							<Tr>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
							</Tr>
							<Tr>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
							</Tr>
							<Tr>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
							</Tr>
							<Tr>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
							</Tr>
						</Tfoot>
					</Table>
				</GEL>
			),
		},
		{
			heading: 'A bordered table',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Table bordered>
						<Caption>Table caption</Caption>
						<Thead>
							<Tr>
								<Th scope="col">Column 1</Th>
								<Th scope="col">Column 2</Th>
								<Th scope="col">Column 3</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
							</Tr>
							<Tr>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
							</Tr>
							<Tr>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
							</Tr>
							<Tr>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
							</Tr>
							<Tr>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
							</Tr>
						</Tfoot>
					</Table>
				</GEL>
			),
		},
		{
			heading: 'A bordered and striped table',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Table bordered striped>
						<Caption>Table caption</Caption>
						<Thead>
							<Tr>
								<Th scope="col">Column 1</Th>
								<Th scope="col">Column 2</Th>
								<Th scope="col">Column 3</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
							</Tr>
							<Tr>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
							</Tr>
							<Tr>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
							</Tr>
							<Tr>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
							</Tr>
							<Tr>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
							</Tr>
						</Tfoot>
					</Table>
				</GEL>
			),
		},
		{
			heading: 'A table with highlights',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Table>
						<Caption>
							Table caption this table width is: <em>(100%)</em>
						</Caption>
						<Thead>
							<Tr>
								<Th scope="col">Column 1</Th>
								<Th scope="col">Column 2</Th>
								<Th scope="col">Column 3</Th>
								<Th scope="col">Column 4</Th>
								<Th scope="col">Column 5</Th>
								<Th scope="col">Column 6</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
							</Tr>
							<Tr highlighted>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
							</Tr>
							<Tr>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
							</Tr>
							<Tr highlighted={[0, [2, 4]]}>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
							</Tr>
							<Tr>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Td colSpan="6">Footer goes here and should colSpan all columns</Td>
							</Tr>
						</Tfoot>
					</Table>
				</GEL>
			),
		},
		{
			heading: 'A bordered table with highlights',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Table bordered>
						<Caption>
							Table caption this table width is: <em>(100%)</em>
						</Caption>
						<Thead>
							<Tr>
								<Th scope="col">Column 1</Th>
								<Th scope="col">Column 2</Th>
								<Th scope="col">Column 3</Th>
								<Th scope="col">Column 4</Th>
								<Th scope="col">Column 5</Th>
								<Th scope="col">Column 6</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
							</Tr>
							<Tr highlighted>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
							</Tr>
							<Tr>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
							</Tr>
							<Tr highlighted={[0, [2, 4]]}>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
							</Tr>
							<Tr>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Td colSpan="6">Footer goes here and should colSpan all columns</Td>
							</Tr>
						</Tfoot>
					</Table>
				</GEL>
			),
		},
		{
			heading: 'A bordered and striped table with highlights',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Table bordered striped>
						<Caption>
							Table caption this table width is: <em>(100%)</em>
						</Caption>
						<Thead>
							<Tr>
								<Th scope="col">Column 1</Th>
								<Th scope="col">Column 2</Th>
								<Th scope="col">Column 3</Th>
								<Th scope="col">Column 4</Th>
								<Th scope="col">Column 5</Th>
								<Th scope="col">Column 6</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
								<Td>Cell 1</Td>
								<Td>Cell 7</Td>
								<Td>Cell 13</Td>
							</Tr>
							<Tr highlighted>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
								<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
								<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
								<Td>Rem saepe eos, modi perferendis.</Td>
							</Tr>
							<Tr>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
								<Td>Cell 3</Td>
								<Td>Cell 9</Td>
								<Td>Cell 15</Td>
							</Tr>
							<Tr highlighted={[0, [2, 4]]}>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
								<Td>Cell 4</Td>
								<Td>Cell 10</Td>
								<Td>Cell 16</Td>
							</Tr>
							<Tr>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
								<Td>Cell 5</Td>
								<Td>Cell 11</Td>
								<Td>Cell 17</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Td colSpan="6">Footer goes here and should colSpan all columns</Td>
							</Tr>
						</Tfoot>
					</Table>
				</GEL>
			),
		},
	];
}