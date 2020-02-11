/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Button } from '@westpac/button';
import { useState } from 'react';
import { Playground } from '../../../website/site/components/playground';
import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [open, setOpen] = useState(false);

	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<Alert look="success" dismissible>
				<strong>Well done!</strong> You successfully read this important alert message. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="info" dismissible>
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.
				Hey neato, I can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="warning" dismissible>
				<strong>Warning!</strong> Better check yourself, you’re not looking too good. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="danger" dismissible>
				<strong>Oh snap!</strong> Change a few things up and try submitting again. Hey neato, I can
				be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="system" dismissible>
				<strong>System Error 8942:</strong> The server is no responding. Please try again later.
				Sorry for the inconvenience. Hey neato, I can be closed. <a href="#">Link</a>
			</Alert>

			<h2>Visibility Controlled via props</h2>
			<Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'}</Button>
			<br />
			<br />
			<Alert open={open} look="success" dismissible>
				<strong>Well done!</strong> You successfully read this important alert message. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>
		</Playground>
	);
}

export default Example;
