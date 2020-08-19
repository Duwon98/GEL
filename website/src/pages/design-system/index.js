/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Fragment } from 'react';
import { Cell, Container, Grid } from '@westpac/grid';
import { Button } from '@westpac/button';
import { TextInput } from '@westpac/text-input';
import HomePageHeader from '../../components/header/home-page-header';
import { Section } from '../../components/section';
import { Body } from '../../components/body';
import { BlockList, BlockListItem } from '../../components/block-list';
import { BlockHeading } from '../../components/block-heading';
import { Footer } from '../../components/layout/footer';
import {
	ReactLogo,
	AtlassianLogo,
	AxureLogo,
	FacebookLogo,
	GitHubLogo,
	GovLogo,
	IbmLogo,
	MyobLogo,
	ShopifyLogo,
	SketchLogo,
	MicrosoftLogo,
	TwitterLogo,
} from '../../components/symbols';

const Homepage = () => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<Fragment>
			<main
				id="content"
				css={{
					textAlign: 'center',
					paddingBottom: '3.0625rem', //space for fixed footer
				}}
			>
				<HomePageHeader />
				<Section size="large">
					<Container>
						<Grid>
							<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
								<Body>
									<h2>Accessibility is in everything we do</h2>
									<p>
										Accessibility and inclusive design is a strong part of how we design in the
										Design Quality team.
									</p>
									<p>
										We delve into the detail and pressure test solutions against the latest WCAG
										requirements, delivering the most accessible components and patterns possible.
										We then guide teams further along the path of accessibility. Read more about our
										commitment to accessibility.
									</p>
									<p>
										Read more about{' '}
										<a href="#0" css={{ margin: `${SPACING(3)} 0`, color: COLORS.primary }}>
											our commitment to accessibility
										</a>
									</p>
								</Body>
							</Cell>
						</Grid>
					</Container>
				</Section>

				<Section size="large" bgFill>
					<Container>
						<Grid>
							<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
								<Body>
									<ReactLogo width={60} css={{ marginBottom: SPACING(2) }} />
									<h2>Built on React</h2>
									<p>
										We’re moving with the times. With React we can showcase so much more and deliver
										higher quality, more accessible code.
									</p>
								</Body>
								<Body css={mq({ marginTop: [SPACING(5), null, SPACING(7)] })}>
									<h3>Who else is using React?</h3>
								</Body>

								<div
									css={{
										borderTop: `1px solid ${COLORS.neutral}`,
										paddingTop: SPACING(5),
									}}
								>
									<Grid rowGap={[SPACING(4), null, SPACING(7)]} css={{ alignItems: 'center' }}>
										<Cell width={[12, 6, 3]}>
											<GovLogo width={113} />
										</Cell>
										<Cell width={[12, 6, 3]}>
											<MicrosoftLogo width={127} />
										</Cell>
										<Cell width={[12, 6, 3]}>
											<MyobLogo width={90} />
										</Cell>
										<Cell width={[12, 6, 3]}>
											<IbmLogo width={77} />
										</Cell>
										<Cell width={[12, 6, 3]}>
											<AtlassianLogo width={159} />
										</Cell>
										<Cell width={[12, 6, 3]}>
											<FacebookLogo width={39} />
										</Cell>
										<Cell width={[12, 6, 3]}>
											<TwitterLogo width={50} />
										</Cell>
										<Cell width={[12, 6, 3]}>
											<ShopifyLogo width={138} />
										</Cell>
									</Grid>
								</div>
							</Cell>
						</Grid>
					</Container>
				</Section>

				<Section size="large">
					<Container>
						<Grid>
							<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
								<Body>
									<h2>Subscribe to our updates</h2>
									<p>Get news about components, code chages, new resources, and helpful tips.</p>
								</Body>

								<form
									action="//westpac.us11.list-manage.com/subscribe/post?u=d3cf7e940bf311ace99e397b7&amp;id=c78955f1b4"
									method="post"
									id="mc-embedded-subscribe-form"
									name="mc-embedded-subscribe-form"
									target="_blank"
									noValidate=""
									css={mq({ marginTop: [SPACING(5), null, SPACING(7)] })}
								>
									<Grid
										rowGap={[`${SPACING(3)} !important`, null, 'unset !important']}
										css={{ textAlign: 'left' }}
									>
										<Cell width={[10, null, 5, 4]} left={[2, null, 3, 4]}>
											<label
												htmlFor="mce-EMAIL"
												css={{ display: 'inline-block', width: '100%', marginBottom: SPACING(2) }}
											>
												Enter your e-mail address
											</label>
											<TextInput type="text" size="large" name="EMAIL" id="mce-EMAIL" />
										</Cell>
										<Cell
											width={[10, null, 2]}
											left={[2, null, 'auto']}
											css={{ display: 'flex', alignItems: 'flex-end' }}
										>
											<Button
												type="submit"
												look="primary"
												size="large"
												block={[true, null, false]}
												name="subscribe"
												id="mc-embedded-subscribe"
											>
												Subscribe
											</Button>
										</Cell>
									</Grid>
								</form>
							</Cell>
						</Grid>
					</Container>
				</Section>

				<Section size="large" bgFill>
					<Container>
						<Grid>
							<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
								<Body>
									<h2>Downloads & links</h2>
									<p>
										Get the Sketch or Axure UI Kit to start designing. Visit GitHub to follow the
										GEL Design System project.
									</p>
								</Body>
							</Cell>
						</Grid>
						<DownloadsAndLinks css={mq({ marginTop: [SPACING(5), null, SPACING(7)] })} />
					</Container>
				</Section>
			</main>
			<Footer />
		</Fragment>
	);
};

export default Homepage;

const DownloadsAndLinks = (props) => {
	const { SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();

	return (
		<Grid
			rowGap={[24, 'normal']}
			columnGap={[null, SPACING(5), SPACING(8), SPACING(10)]}
			css={{ textAlign: 'left' }}
			{...props}
		>
			<Cell width={[10, 6, null, 5]} left={[2, 'auto', null, 2]}>
				<BlockHeading>Downloads</BlockHeading>
				<BlockList
					css={mq({
						marginTop: [null, null, SPACING(2)],
					})}
				>
					<BlockListItem target="_blank" logo={SketchLogo}>
						Sketch UI Kit Download
					</BlockListItem>
					<BlockListItem target="_blank" logo={AxureLogo}>
						Axure UI Kit Download
					</BlockListItem>
				</BlockList>
			</Cell>
			<Cell width={[10, 6, null, 5]}>
				<BlockHeading>Links</BlockHeading>
				<BlockList
					css={mq({
						marginTop: [null, null, SPACING(2)],
					})}
				>
					<BlockListItem href="https://github.com/WestpacGEL/GEL" target="_blank" logo={GitHubLogo}>
						Go to GitHub
					</BlockListItem>
				</BlockList>
			</Cell>
		</Grid>
	);
};
