import { jsx } from '@westpac/core';
import { Link } from '@westpac/link';
import { Body } from '@westpac/body';
import { Playground } from '../../../../website/src/components/playground/macro';
import { PdfFileIcon, ArrowRightIcon } from '@westpac/icon';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<p>
					Lorem ipsum dolor{' '}
					<Link href="#" type="inline">
						look, I’m an inline link
					</Link>{' '}
					sit amet consectetur, adipisicing elit. Libero facilis odit voluptate reprehenderit
					laborum numquam ex optio doloribus magni repudiandae vero fugiat iusto tempora debitis
					sunt laboriosam nobis, ut voluptatum?
				</p>
				<p>
					Lorem ipsum dolor{' '}
					<Link href="#" type="inline" iconBefore={PdfFileIcon}>
						look, I’m an inline link
					</Link>{' '}
					sit amet consectetur, adipisicing elit. Libero facilis odit voluptate reprehenderit
					laborum numquam ex optio doloribus magni repudiandae vero fugiat iusto tempora debitis
					sunt laboriosam nobis, ut voluptatum?
				</p>
				<p>
					Lorem ipsum dolor{' '}
					<Link href="#" type="inline" iconAfter={ArrowRightIcon}>
						look, I’m an inline link
					</Link>{' '}
					sit amet consectetur, adipisicing elit. Libero facilis odit voluptate reprehenderit
					laborum numquam ex optio doloribus magni repudiandae vero fugiat iusto tempora debitis
					sunt laboriosam nobis, ut voluptatum?
				</p>
			</Body>
		</Playground>
	);
};

export default Demo;
