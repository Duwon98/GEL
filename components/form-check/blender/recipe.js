import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import { FormCheck, Option } from '@westpac/form-check';
import { blenderFormCheck } from '../src/overrides/formCheck';
import { blenderOption } from '../src/overrides/option';
import { blenderLabel } from '../src/overrides/label';
import { blenderHint } from '../src/overrides/hint';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/form-check'] = {
		FormCheck: {
			component: blenderFormCheck.component,
			styles: blenderFormCheck.styles,
		},
		Option: {
			styles: blenderOption.styles,
		},
		Label: {
			component: blenderLabel.component,
			styles: blenderLabel.styles,
		},
		Hint: {
			component: blenderHint.component,
			styles: blenderHint.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<FormCheck name="text">
				<Option value="1" hint="Hint text">
					Text
				</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" size="large">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" size="large">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" inline>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/form-check'] = {
		FormCheck: {
			component: blenderFormCheck.component,
			attributes: blenderFormCheck.attributes,
		},
		Label: {
			component: blenderLabel.component,
			attributes: blenderLabel.attributes,
		},
		Hint: {
			component: blenderHint.component,
		},
	};

	return [
		// Checkboxes
		{
			heading: 'Checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="example-checkboxes" instanceIdPrefix="GEL">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},

		// Radios
		{
			heading: 'Radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="radio" name="example-radios" instanceIdPrefix="GEL">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},

		// Sizes
		{
			heading: 'Checkbox sizes',
			subheading: 'Large',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck
						type="checkbox"
						name="example-large-checkboxes"
						instanceIdPrefix="GEL"
						size="large"
					>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Radio sizes',
			subheading: 'Large',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="radio" name="example-large-radios" instanceIdPrefix="GEL" size="large">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},

		// Hints
		{
			heading: 'Option hints',
			subheading: 'Checkboxes with option hints',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="example-checkboxes-hints" instanceIdPrefix="GEL">
						<Option value="1" hint="Your option 1 hint">
							Your option 1
						</Option>
						<Option value="2" hint="Your option 2 hint">
							Your option 2
						</Option>
						<Option value="3" hint="Your option 3 hint">
							Your option 3
						</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Large checkboxes with option hints',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck
						type="checkbox"
						name="example-checkboxes-large-hints"
						instanceIdPrefix="GEL"
						size="large"
					>
						<Option value="1" hint="Your option 1 hint">
							Your option 1
						</Option>
						<Option value="2" hint="Your option 2 hint">
							Your option 2
						</Option>
						<Option value="3" hint="Your option 3 hint">
							Your option 3
						</Option>
					</FormCheck>
				</GEL>
			),
		},

		// Inline
		{
			heading: 'Inline form-checks',
			subheading: 'Checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="example-inline-checkboxes" instanceIdPrefix="GEL" inline>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="radio" name="example-inline-radios" instanceIdPrefix="GEL" inline>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Large checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck
						type="checkbox"
						name="example-large-inline-checkboxes"
						instanceIdPrefix="GEL"
						size="large"
						inline
					>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Large radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck
						type="radio"
						name="example-large-inline-radios"
						instanceIdPrefix="GEL"
						size="large"
						inline
					>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},

		// Disabled
		{
			heading: 'Disabled form-checks',
			subheading: 'Checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck
						type="checkbox"
						name="example-disabled-checkboxes"
						instanceIdPrefix="GEL"
						disabled
						defaultValue="2"
					>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck
						type="radio"
						name="example-disabled-radios"
						instanceIdPrefix="GEL"
						disabled
						defaultValue="2"
					>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
	];
}
