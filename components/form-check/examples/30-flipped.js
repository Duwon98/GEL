/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia/>

			<h2>Medium</h2>
			<FormCheck type="checkbox" name="example-checkbox-large-flip" size="medium" flipped>
				<Option value="1">Option 1</Option>
				<Option value="r">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-checkbox-large-flip" size="medium" flipped>
				<Option value="1">Option 1</Option>
				<Option value="r">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<hr />

			<h2>Large</h2>
			<FormCheck type="checkbox" name="example-checkbox-large-flip" size="large" flipped>
				<Option value="1">Option 1</Option>
				<Option value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-checkbox-large-flip" size="large" flipped>
				<Option value="1">Option 1</Option>
				<Option value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<hr />

			<h2>Inline</h2>
			<FormCheck
				type="checkbox"
				name="example-checkbox-medium-inline-flip"
				size="medium"
				inline
				flipped
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-checkbox-large-inline-flip" size="large" inline flipped>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>
		</GEL>
	);
}

export default Example;
