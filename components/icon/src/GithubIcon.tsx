import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const GithubIcon = ({
	assistiveText = 'Github',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="GithubIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M11.9992265,0 C5.37298948,0 0,5.50873921 0,12.3044759 C0,17.7397153 3.43799327,22.3514562 8.20648393,23.9789531 C8.80723276,24.0914528 9.02623233,23.7119536 9.02623233,23.3857042 C9.02623233,23.0939548 9.01573235,22.3199563 9.00973236,21.2932083 C5.6714889,22.0364569 4.96724027,19.6432115 4.96724027,19.6432115 C4.42124134,18.2227143 3.63524288,17.8439651 3.63524288,17.8439651 C2.54549502,17.0804666 3.71774272,17.0962165 3.71774272,17.0962165 C4.92149036,17.1832164 5.55523912,18.363714 5.55523912,18.363714 C6.62623703,20.2439604 8.36398362,19.7017114 9.04798229,19.386712 C9.15673207,18.5909636 9.46723146,18.0487147 9.80998079,17.7412153 C7.14523601,17.4307159 4.3432415,16.3754679 4.3432415,11.6609772 C4.3432415,10.3177298 4.81124058,9.21898195 5.57848908,8.35948363 C5.45548932,8.04748424 5.04374013,6.79723669 5.69623885,5.10299001 C5.69623885,5.10299001 6.70423687,4.77149066 8.99623239,6.36373754 C9.95323051,6.09148807 10.9799785,5.95423834 12.0007265,5.95048835 C13.0199745,5.95423834 14.0459725,6.09148807 15.0044706,6.36373754 C17.2957161,4.77149066 18.3014642,5.10299001 18.3014642,5.10299001 C18.9562129,6.79723669 18.5444637,8.04748424 18.4214639,8.35948363 C19.1902124,9.21898195 19.6544615,10.3177298 19.6544615,11.6609772 C19.6544615,16.3874679 16.848717,17.4269659 14.1757222,17.7322153 C14.6062214,18.1117145 14.9902207,18.8624631 14.9902207,20.0107108 C14.9902207,21.6554576 14.9752207,22.982955 14.9752207,23.3857042 C14.9752207,23.7149536 15.1912203,24.0974528 15.8002191,23.9774531 C20.5649597,22.3469562 23.999953,17.7382153 23.999953,12.3044759 C23.999953,5.50873921 18.6262135,0 11.9992265,0"
		/>
	</Icon>
);

GithubIcon.propTypes = {
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
