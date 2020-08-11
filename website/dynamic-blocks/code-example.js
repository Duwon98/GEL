/** @jsx jsx */

import React, { Suspense, Fragment } from 'react';

import { jsx, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

import { CheckboxPrimitive } from '@arch-ui/controls';
import Select from '@arch-ui/select';

import preval from 'preval.macro';

import importCodeExamples from '../utils/babel-dynamic-code-block-import.macro';

let data = preval`
const fs = require('fs');
const path = require('path');
const DEMO_FOLDER = 'demos';

let componentsDir = path.join(__dirname, '..', '..', 'components');
let packageDirectories = fs.readdirSync(componentsDir);
let examples = [];

function findDemos(dir, packageName) {
	fs.readdirSync(dir).forEach((file) => {
	  const fullPath = path.join(dir, file);
	  if (fs.lstatSync(fullPath).isDirectory()) {
		findDemos(fullPath, packageName);
	  } else if (fs.lstatSync(fullPath).isFile() && path.extname(fullPath) === '.js' && !file.startsWith('.') && !file.startsWith('_')) {
		const trimPath = fullPath.match(/(demos.*)/)[1];
		examples.push(path.join(packageName, trimPath));
	  }
	});
}

packageDirectories.forEach(pkg => {
	const pkgFile = path.join(componentsDir, pkg, 'package.json');
	if (fs.existsSync(pkgFile)) {
		const packageJSON = require(pkgFile);
		const packageName = packageJSON.name;
		const demoPath = path.join(componentsDir, pkg, DEMO_FOLDER);
		if(fs.existsSync(demoPath) && fs.lstatSync(demoPath).isDirectory()) {
			findDemos(demoPath, packageName);
		}
	}
});

module.exports = examples;
`;

const options = data.map((o) => ({ label: o, value: o }));
const codeExamples = importCodeExamples(data);
let valueCache = new Map();
let promiseCache = new Map();

function ShowCodeBlock({ showCode, showDemo, loadCodeBlock, context }) {
	let promise = promiseCache.get(loadCodeBlock);
	if (!promise) {
		promise = loadCodeBlock().then((mod) => {
			valueCache.set(loadCodeBlock, mod.default);
		});

		promiseCache.set(loadCodeBlock, promise);
	}

	let CodeBlock = valueCache.get(loadCodeBlock);

	console.log('CodeBlock');
	console.log(CodeBlock);

	if (!CodeBlock) {
		throw promise;
	}
	return <CodeBlock context={context} showCode={showCode} showDemo={false} />;
}

export const CodeExample = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			codeExample: null,
			showCode: false,
			showDemo: false,
			// below are depracated
			level: 'h2',
			size: 6,
			heading: '',
			addSubText: false,
			subText: '',
			addTableContent: false,
			editHeader: false,
			...(value || {}),
		};

		const update = (changes) =>
			onChange({
				...currentValue,
				...changes,
			});

		return (
			<Fragment>
				<Select
					isSearchable={true}
					placeholder="Select a code example"
					options={options}
					value={options.find((o) => o.value === currentValue.codeExample)}
					onChange={({ value }) => {
						update({ codeExample: value });
					}}
				/>
				<div css={{ display: 'flex' }}>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.showCode}
							tabIndex="0"
							onChange={({ target }) => {
								update({ showCode: target.checked });
							}}
						/>
						<span>Show code</span>
					</label>
				</div>
			</Fragment>
		);
	},
	component: ({
		codeExample,
		showCode,
		showDemo = false,
		context,
		heading = '',
		size = 6,
		level = 'h2',
		addTableContent = false,
		subText = '',
	}) => {
		if (typeof window === 'undefined') {
			return <p>Loading...</p>;
		}

		const mq = useMediaQuery();
		const loadCodeBlock = codeExamples[codeExample];
		console.log('loadCodeBlock');
		console.log(loadCodeBlock);
		console.log('window', typeof window !== 'undefined');
		return (
			<Cell
				width={[12, null, null, 10]}
				left={[1, null, null, 2]}
				css={mq({
					marginBottom: ['30px', null, null, null, '48px'],
					height: 'auto',
					':last-child': { marginBottom: 0 },
				})}
			>
				<Suspense fallback={<p>Loading...</p>}>
					{loadCodeBlock && typeof window !== 'undefined' ? (
						<ShowCodeBlock
							loadCodeBlock={loadCodeBlock}
							context={context}
							showCode={showCode}
							showDemo={showDemo}
						/>
					) : (
						'Example not found.'
					)}
				</Suspense>
			</Cell>
		);
	},
};
