/** @jsx jsx */

import { GEL, jsx, useMediaQuery } from '@westpac/core';

import { Wrapper, Hero, ActionBar, Footer, Container, Grid } from '../../components/article';
import { PageContextProvider } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';

import { CustomRenderer } from './custom-renderer';
import { getApolloClient } from '../../apollo';
import { gql } from '@apollo/client';

/*
TO DO
1. Rebuild homepage
	- fix cards
	- other design tweaks?
2. Rebuild article page
	- trello design tweaks?
3. Hook up links

Later
- footer links
    - hook up to correct links
- Action bar
    - hook up to correct links
- GEL wrapper issues at layout level
- fix semantic htmlcvx          vx
*/

// fix main container and footer spacing
const Home = ({ content }) => {
	const mq = useMediaQuery();
	return (
		<Wrapper>
			<PageContextProvider>
				<div css={{ paddingBottom: '3.0625rem' }}>
					<Hero />
					<ActionBar />
					<Container
						css={mq({
							marginTop: ['1.875rem', '2.25rem', '3rem', '3.375rem', '3.75rem'],
							marginBottom: ['6.4375rem', '6rem', '4.25rem', '6rem', '6.1875rem'],
						})}
					>
						<Grid>{content?.document ? <CustomRenderer document={content.document} /> : null}</Grid>
					</Container>
					<Footer />
					<StickyFooter type="article" />
				</div>
			</PageContextProvider>
		</Wrapper>
	);
};

export async function getStaticProps() {
	const client = getApolloClient();

	const res = await client.query({
		query: gql`
			query article($url: String!) {
				articles(where: { url: { equals: $url } }) {
					id
					content {
						document(hydrateRelationships: true)
					}
				}
			}
		`,
		variables: {
			url: '/home',
		},
	});

	const homeArticle = res?.data?.articles[0] || null;
	const content = homeArticle?.content || null;
	return {
		props: {
			content,
		},
	};
}

export default Home;
