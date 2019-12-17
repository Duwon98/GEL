/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';
import React from 'react';

import { AssistiveText, assistiveTextStyles } from './overrides/assistivetext';
import { Crumb as CrumbWrapper, crumbStyles } from './overrides/crumb';
import { Link, linkStyles } from './overrides/link';
import { Icon, iconStyles } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

/**
 * Crumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Crumb = ({
	current,
	href,
	text,
	assistiveText,
	onClick,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		COLORS,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			AssistiveText: {
				styles: assistiveTextStyles,
				component: AssistiveText,
				attributes: state => state,
			},
			Crumb: {
				styles: crumbStyles,
				component: CrumbWrapper,
				attributes: state => state,
			},
			Link: {
				styles: linkStyles,
				component: Link,
				attributes: state => state,
			},
			Icon: {
				styles: iconStyles,
				component: Icon,
				attributes: state => state,
			},
		},
	};

	const state = {
		current,
		href,
		text,
		assistiveText,
		onClick,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Crumb.component
			css={overrides.subComponent.Crumb.styles}
			{...overrides.subComponent.Crumb.attributes(state)}
		>
			{current && (
				<overrides.subComponent.AssistiveText.component
					css={overrides.subComponent.AssistiveText.styles}
					{...overrides.subComponent.AssistiveText.attributes(state)}
					insideCrumb={true}
				>
					{assistiveText}
				</overrides.subComponent.AssistiveText.component>
			)}
			<overrides.subComponent.Link.component
				css={overrides.subComponent.Link.styles}
				{...overrides.subComponent.Link.attributes(state)}
				href={current ? null : href}
				onClick={onClick}
			>
				{text}
			</overrides.subComponent.Link.component>
			{!current && (
				<overrides.subComponent.Icon.component
					css={overrides.subComponent.Icon.styles}
					{...overrides.subComponent.Icon.attributes(state)}
					aria-hidden="true"
					size="small"
					color={COLORS.primary}
				/>
			)}
		</overrides.subComponent.Crumb.component>
	);
};

Crumb.isCrumb = true;

// ==============================
// Types
// ==============================

Crumb.propTypes = {
	/**
	 * The text of the crumb
	 */
	text: PropTypes.string.isRequired,

	/**
	 * An href for a link
	 */
	href: PropTypes.string,

	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,

	/**
	 * Visually hidden text to use for the current page crumb
	 */
	assistiveText: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	override: PropTypes.shape({
		subComponent: PropTypes.shape({
			AssistiveText: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Crumb: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Link: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Icon: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Crumb.defaultProps = {
	assistiveText: 'Current page:',
};
