import React from 'react';
import styled, { css } from 'styled-components';
import Layout from '../components/layout';

import Fade from 'react-reveal/Fade';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledFrame = styled.section`
	max-width: 90rem;
	margin: 0 auto;
	background-color: rgba(0, 0, 0, 0.8);
	padding: 6rem 4rem;
	position: relative;

	&:before {
		position: absolute;
		content: '';
		border-top: 1px solid rgba(189, 228, 251, 0.5);
		width: 2.5rem;
		height: 2.5rem;
		border-right: 1px solid rgba(189, 228, 251, 0.5);
		top: 0;
		right: 0;
		transition: all 600ms;
	}

	&:after {
		position: absolute;
		content: '';
		border-bottom: 1px solid rgba(189, 228, 251, 0.5);
		width: 2.5rem;
		height: 2.5rem;
		border-left: 1px solid rgba(189, 228, 251, 0.5);
		bottom: 0;
		left: 0;
		transition: all 600ms;
	}

	&:hover {
		&:before {
			border-color: rgba(189, 228, 251, 0.8);
			width: 3rem;
			height: 3rem;
		}

		&:after {
			border-color: rgba(189, 228, 251, 0.8);
			width: 3rem;
			height: 3rem;
		}
	}
`;

const HighlightSpan = styled.span`
	display: block;
	width: 5rem;
	height: 2px;
	margin-bottom: 1rem;
	background-color: var(--pink);
`;

export default function About() {
	return (
		<Layout>
			<div
				css={css`
					padding: 8rem 3rem;
				`}
			>
				<StyledFrame>
					<Fade left delay={500}>
						<h1
							css={css`
								color: var(--pink);
								font-size: 3rem;
								text-transform: uppercase;
								letter-spacing: 1.5px;
								font-family: Tomorrow;
								margin-bottom: 2rem;
							`}
						>
							About
						</h1>

						<HighlightSpan />
					</Fade>

					<Fade bottom delay={1000}>
						<p>Welcome!</p>
						<p>
							My name is Sergi and I am a professional web
							developer. I have been working in the industry for
							about {new Date().getFullYear() - 2016} years now.
						</p>
						<p>
							Professionally, the bulk of my work has been around
							Wordpress theme development, with dabbles on React
							and Vue.
						</p>
						<p>
							At my current position as Frontend lead at{' '}
							<a
								target="_blank"
								href="https://inmotionrealestate.com"
							>
								inMotion Real Estate Media
							</a>
							, where I have completed over 30 projects from
							inception to delivery, my main focus has been on
							delivering modern UIs with interesting interactions
							for the users and a good experience for the clients
							when it comes to easily creating and editing the
							content of their websites.
						</p>
						<p>
							When it comes to personal projects, I am very
							Javascript and React focused, where I am going
							deeper into the full-stack realm. I have been
							building full-stack projects with Python and Next.js
							as you can find on the{' '}
							<AniLink
								paintDrip
								to="projects"
								duration={1}
								hex="#0a0b19"
							>
								Side Projects
							</AniLink>{' '}
							section.
						</p>
						<p>
							In 2022, my plan is on continuing developing
							full-stack applications with React, getting better
							at using React frameworks like Gatsby or Next but
							also exploring web3, as I am currently learning more
							about smart contract development with Solidity on
							the Ethereum blockchain.
						</p>
					</Fade>
				</StyledFrame>
			</div>
		</Layout>
	);
}
