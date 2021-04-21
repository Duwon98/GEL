/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';
import { StyledButton as Button } from './_utils';

function Example({ brand }) {
	const [progress, setProgress] = useState(5);

	function handleProgress(unit) {
		let newProgress = progress + unit;

		if (newProgress > 100) {
			newProgress = 100;
		}

		if (newProgress < 0) {
			newProgress = 0;
		}

		setProgress(newProgress);
	}

	return (
		<GEL brand={brand}>
			<h2>Default</h2>

			<h3>Label</h3>
			<ProgressBar value={0} />
			<ProgressBar value={20} />

			<h3>noLabel</h3>
			<ProgressBar value={0} noLabel />
			<ProgressBar value={20} noLabel />

			<hr />

			<h2>Skinny</h2>
			<ProgressBar value={0} look="skinny" />
			<ProgressBar value={20} look="skinny" />
		</GEL>
	);
}

export default Example;
