import React from 'react';
import styled, { css } from 'styled-components';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import Project from '../components/Project';

const HighlightSpan = styled.span`
	display: block;
	width: 5rem;
	height: 2px;
	margin-bottom: 1rem;
	background-color: var(--pink);
`;

const StyledProjectGrid = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 4rem;
`;

export default function projects() {
	return (
		<Layout>
			<div
				css={css`
					padding: 8rem 3rem;
				`}
			>
				<section>
					<Fade left delay={500}>
						<h1
							css={css`
								color: var(--pink);
								font-size: 3rem;
								position: relative;
								text-transform: uppercase;
								letter-spacing: 1.5px;
								font-family: Tomorrow;
								margin-bottom: 2rem;
							`}
						>
							Side Projects
						</h1>

						<HighlightSpan />
					</Fade>
					<Fade bottom delay={1000}>
						<p>
							Why Side Projects and not just projects? All of my
							professional work is under strict NDA. But you can
							see some examples of our work done by "inMotion"
							(where I currently work) on their{' '}
							<a
								href="https://inmotionrealeste.com"
								target="_blank"
							>
								website
							</a>
						</p>
						<p>
							So this portfolio is a collections of side projects
							that I do either to learn or because I am interested
							in a partciular technology.
						</p>
					</Fade>
				</section>

				<StyledProjectGrid>
					<Project
						image="../images/project1.PNG"
						title="Knowledge Portfolio"
						text={`
							
								<p>
									An ongoing
									<span className="highlight">
										Full-Stack
									</span>
									project made using
									<span className="highlight">Next.js</span>, <span className="highlight">Keystone.js</span>, <span className="highlight">GraphQl</span>
									and
									<span className="highlight">
										Styled Components
									</span>
									.
								</p>
								<p>
									The point of this project is to empower
									students all around and to keep track of
									what they have been learning and to give
									them an easy way to share that knowledge.
								</p>
							
						`}
					/>
				</StyledProjectGrid>
			</div>
		</Layout>
	);
}
