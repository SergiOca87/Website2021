/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';
import { useStaticQuery, graphql } from 'gatsby';

// import '@fontsource/alegreya-sans'; // Defaults to weight 400.
// import '@fontsource/tomorrow'; // Defaults to weight 400.
// import '@fontsource/barlow'; // Defaults to weight 400.

import StyledBackground from '../components/StyledBackground';
import styled from 'styled-components';

const Wrapper = styled('div')`
	min-height: 100vh;
	height: 100%;
	overflow: hidden !important;
	font-family: Alegreya Sans !important;
	color: #bde4fb;
	font-display: block;
`;

const Layout = ({ children }) => {
	return (
		<>
			{/* <Header siteTitle={data.site.siteMetadata.title} /> */}
			<Wrapper>
				<StyledBackground>
					<GlobalStyles />
					{children}
				</StyledBackground>
			</Wrapper>
			{/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
		</>
	);
};

export default Layout;
