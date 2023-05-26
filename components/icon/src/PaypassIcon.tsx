import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const PaypassIcon = ({
	assistiveText = 'Paypass',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="PaypassIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M14.3137085,0.686291501 C17.209139,3.581722 19,7.581722 19,12 C19,16.418278 17.209139,20.418278 14.3137085,23.3137085 L12.8994949,21.8994949 C15.4329966,19.3659932 17,15.8659932 17,12 C17,8.13400675 15.4329966,4.63400675 12.8994949,2.10050506 L14.3137085,0.686291501 L14.3137085,0.686291501 Z M11.4852814,3.51471863 C13.6568542,5.6862915 15,8.6862915 15,12 C15,15.3137085 13.6568542,18.3137085 11.4852814,20.4852814 L10.0710678,19.0710678 C11.8807119,17.2614237 13,14.7614237 13,12 C13,9.23857625 11.8807119,6.73857625 10.0710678,4.92893219 L11.4852814,3.51471863 Z M8.65685425,6.34314575 C10.1045695,7.790861 11,9.790861 11,12 C11,14.209139 10.1045695,16.209139 8.65685425,17.6568542 L7.24264069,16.2426407 C8.32842712,15.1568542 9,13.6568542 9,12 C9,10.3431458 8.32842712,8.84314575 7.24264069,7.75735931 L8.65685425,6.34314575 L8.65685425,6.34314575 Z M5.82842712,9.17157288 C6.55228475,9.8954305 7,10.8954305 7,12 C7,13.1045695 6.55228475,14.1045695 5.82842712,14.8284271 L4.41421356,13.4142136 C4.77614237,13.0522847 5,12.5522847 5,12 C5,11.4477153 4.77614237,10.9477153 4.41421356,10.5857864 L5.82842712,9.17157288 L5.82842712,9.17157288 Z"
		/>
	</Icon>
);

PaypassIcon.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * String to use as the `aria-label` for the icon. Set to an empty string if you
	 * are rendering the icon with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the icon name e.g. `BusinessPersonIcon` --> "Business Person"
	 */
	assistiveText: PropTypes.string,
	/**
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Svg: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Control the size of the icon.
	 *
	 * Defaults to "medium" --> 24px
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall']),
		PropTypes.arrayOf(PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall'])),
	]),
};
