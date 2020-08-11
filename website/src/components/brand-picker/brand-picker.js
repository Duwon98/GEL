/** @jsx jsx */

import { jsx, Global, useBrand, useMediaQuery } from '@westpac/core';
import { Fragment } from 'react';
import { useBrandSwitcher } from '../providers/brand-switcher';
import { useRouter } from 'next/router';
import { Container, Grid, Cell } from '@westpac/grid';
import { Section } from '../../components/layout/section';
import { Body } from '../../components/body';
import { BASE_URL } from '../../config.js';
import { findByDisplayValue } from '@testing-library/react';

export const BrandPicker = () => {
	const { brands } = useBrandSwitcher();
	const { COLORS, TYPE, PACKS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<Fragment>
			<Global styles={{ body: { backgroundColor: COLORS.background } }} />
			<header
				css={mq({
					backgroundColor: '#C80038',
					height: ['4.125rem', null, '18.375rem'],
					paddingBottom: [null, null, SPACING(10)],
					display: 'flex',
					alignItems: ['center', null, 'flex-end'],
					color: 'white',
				})}
			>
				<Container>
					<h1
						css={mq({
							'&&': {
								fontSize: [
									PACKS.typeScale.bodyFont[7].fontSize,
									null,
									PACKS.typeScale.bodyFont[2].fontSize,
								],
								lineHeight: [
									PACKS.typeScale.bodyFont[7].lineHeight,
									null,
									PACKS.typeScale.bodyFont[2].lineHeight,
								],
								fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
								fontWeight: 700,
								margin: 0,
							},
						})}
					>
						Brand{' '}
						<em
							css={{
								fontFamily: '"guardian","Times New Roman","Times",serif',
								fontStyle: 'italic',
								fontWeight: 300,
							}}
						>
							picker
						</em>
					</h1>
				</Container>
			</header>
			<Section>
				<Container>
					<Grid>
						<Cell width={[12, null, null, 3]}>
							<h2
								size={[6, null, 4]}
								css={mq({
									'&&': {
										fontSize: [
											PACKS.typeScale.bodyFont[6].fontSize,
											null,
											PACKS.typeScale.bodyFont[5].fontSize,
										],
										lineHeight: [
											PACKS.typeScale.bodyFont[6].lineHeight,
											null,
											PACKS.typeScale.bodyFont[5].lineHeight,
										],
										fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
										fontWeight: 700,
										marginTop: 0,
										marginBottom: ['1.125rem', null, '1.5rem'],
									},
								})}
							>
								Select your brand
							</h2>
							<Body>
								<p css={{ ...PACKS.typeScale.bodyFont[8] }}>
									This selection will determine the brand you’ll see. Don’t worry, you’ll be able to
									change the brand you’ve selected at any time.
								</p>
							</Body>
						</Cell>
						<Cell width={[12, null, null, 9]}>
							<Grid
								tag="ul"
								role="list"
								rowGap="24px"
								css={{
									listStyle: 'none',
									paddingLeft: 0,
									margin: 0,
								}}
							>
								<BrandCard brand={brands.WBC} />
								<BrandCard brand={brands.STG} />
								<BrandCard brand={brands.BOM} />
								<BrandCard brand={brands.BSA} />
								<BrandCard brand={brands.WBG} />
							</Grid>
						</Cell>
					</Grid>
				</Container>
			</Section>
		</Fragment>
	);
};

const BrandCard = ({ brand }) => {
	const { PACKS } = useBrand();
	const currentPath = useRouter().asPath;
	return (
		<Cell tag="li" width={[6, 4]}>
			{/* This is not a Next Link as I want the server to re-render and set a cookie */}
			<a
				href={`${currentPath}?b=${brand.BRAND}`}
				css={{
					display: 'block',
					backgroundColor: 'white !important',
					textDecoration: 'unset',
					color: '#1976D2',
					':hover': {
						boxShadow: '0px 0px 13px rgba(46,46,46,0.51)',
						transition: 'box-shadow 0.3s ease-in-out',
					},
				}}
			>
				<img
					css={{ maxWidth: '100%', display: 'block' }}
					src={`${BASE_URL}/images/${brand.BRAND.toLowerCase()}-gui.png`}
					alt=""
				/>
				<Body
					css={{ padding: '0.875rem 0.75rem' }}
					overrides={{
						Body: {
							styles: (styles) => ({
								...styles,
								...PACKS.typeScale.bodyFont[10],
							}),
						},
					}}
				>
					{brand.name}
				</Body>
			</a>
		</Cell>
	);
};
