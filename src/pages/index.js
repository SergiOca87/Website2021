import React from 'react';
import { Link } from 'gatsby';
import { css } from 'styled-components';
import Layout from '../components/layout';
import { Blob } from 'react-blob';

import styled from 'styled-components';
import ButtonBg from '../images/button-bg.svg';
import IntroBlob from '../images/intro-blob.svg';

import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const breakpoints = [900, 1440];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Container = styled.section`
	max-width: 140rem;
	margin: 0 auto;
	padding: 0 4rem;
`;

const ViewPort = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
`;

const StyledMainBlock = styled.div`
	width: 70vw;
	display: flex;
	justify-content: center;

	${mq[0]} {
		width: 100%;
	}
`;

const StyledTitle = styled.h1`
	position: relative;
	color: #bde4fb;
	font-size: 5rem;
	letter-spacing: 2px;
	line-height: 1.4;
	font-weight: 300;
	text-transform: uppercase;
	font-family: Barlow;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;

	${mq[0]} {
		font-size: 4rem;
	}

	span {
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: 400;
		letter-spacing: 2px;
		display: block;
	}
`;

const StyledButtons = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 4rem;
	margin-top: 30vh;
	width: 25rem;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		outline: none;
		color: var(--pink);
		cursor: pointer;
		padding: 1.5rem 0;
		position: relative;
		font-size: 2rem;
		font-family: Tomorrow;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-decoration: none;
		background-color: rgba(10, 11, 25, 0.5);
		max-width: 20rem;
		width: 100%;
		margin-left: auto;
		overflow: hidden;
		transition: all 600ms;

		&:before {
			position: absolute;
			content: '';
			border-top: 1px solid rgba(189, 228, 251, 0.2);
			width: 1rem;
			height: 1rem;
			border-right: 1px solid rgba(189, 228, 251, 0.2);
			top: 0;
			right: 0;
			transition: all 600ms;
		}

		&:after {
			position: absolute;
			content: '';
			border-bottom: 1px solid rgba(189, 228, 251, 0.2);
			width: 1rem;
			height: 1rem;
			border-left: 1px solid rgba(189, 228, 251, 0.2);
			bottom: 0;
			left: 0;
			transition: all 600ms;
		}

		.text-content {
			transition: all 600ms;
		}

		.button-bg {
			position: absolute;
			bottom: -4rem;
			left: -2rem;
			background-image: url(${ButtonBg.url});
			background-repeat: no-repeat;
			background-position: -35px -12px;
			background-size: cover;
			width: 100%;
			height: 169%;
			z-index: -1;
			transform: rotate(30deg);
			transition: all 1s;
		}

		&:last-child {
			margin-left: 0;

			.button-bg {
				background-position: 10px -10px;
				transform: none;
				bottom: initial;
				left: initial;
			}
		}

		&:hover {
			.button-bg {
				transform: scale(3);
			}

			&:before,
			&:after {
				width: 2rem;
				height: 2rem;
				border-color: rgba(189, 228, 251, 1);
			}

			.text-content {
				text-shadow: 0 0 2px rgb(186 123 150 / 0.5),
					0 0 5px rgb(186 123 150 / 0.1);
			}
		}
	}
`;

const MarginLi = styled.li`
	margin-bottom: 2rem;
`;

const HighlightSpan = styled.span`
	display: block;
	width: 5rem;
	height: 2px;
	margin-bottom: 1rem;
	background-color: var(--pink);
`;

const linkStyle = css`
	display: block;
	text-decoration: none;
	color: #bde4fb;
	font-size: 2rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	transition: color 300ms;
	padding: 2rem 5rem;
	color: var(--pink);
	margin-right: 1rem;

	&:hover {
		color: #44318d;
	}
`;

const StyledTile = styled.div`
	position: relative;
	margin-right: 10vw;
	margin-top: 20vh;

	svg {
		position: absolute;
		top: -9rem;
		z-index: -2;
		transform: rotate(-74deg);
		left: 2rem;
		opacity: 0.9;
		width: 31rem;
	}

	// &:before {
	//   content: "";
	//   position: absolute;
	//   width: 17rem;
	//   height: 10rem;
	//   background-color: blue;
	//   top: -4%;
	//   left: 12px;
	//   transform: rotate(23deg);
	//   background: linear-gradient(
	//     to bottom,
	//     rgba(12, 14, 32, 0.2),
	//     rgba(40, 44, 85, 0.4)
	//   );
	// }
`;

const IndexPage = () => {
	const BackgroundBlob = ({ style, props }) => (
		<Blob
			size="80vh"
			style={{
				position: 'absolute',
				bottom: '-30%',
				left: '-10%',
				zIndex: -1,
				backgroundColor: '#21D4FD',
				color: 'white',
				opacity: 0.05,
				fontSize: '50vh',
				animationDuration: '30s',
			}}
		/>
	);

	return (
		<Layout>
			{/* <SEO title="Home" /> */}
			<ViewPort>
				<BackgroundBlob />
				<Container>
					<StyledMainBlock>
						<div>
							<StyledTile>
								<StyledTitle>
									Sergi Oca
									<br />
									<HighlightSpan></HighlightSpan>
									<span>&nbsp;&nbsp;&nbsp;Web Developer</span>
									{/* <IntroBlob /> */}
									<div
										css={css`
											position: absolute;
											top: -15%;
											right: -15%;
											z-index: -1;
										`}
									>
										{/* <Bounce top>
											<Blob
												size="20rem"
												style={{
													backgroundColor: '#1c1e40',
													color: 'white',
													opacity: 0.7,
													animationDuration: '30s',
												}}
											/>
										</Bounce> */}
									</div>
								</StyledTitle>
							</StyledTile>
						</div>
						<div>
							<StyledButtons>
								<AniLink
									paintDrip
									to="about"
									duration={1}
									hex="#0a0b19"
								>
									<span className="text-content">About</span>
									<span className="button-bg">
										<ButtonBg />
									</span>
								</AniLink>
								<AniLink fade to="/projects">
									<span className="text-content">
										Side Projects
									</span>
									<span className="button-bg">
										<ButtonBg />
									</span>
								</AniLink>
							</StyledButtons>
						</div>
					</StyledMainBlock>
				</Container>
			</ViewPort>
			{/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        css={css`
          position: absolute;
          bottom: 2px;
          z-index: 1;
        `}
      >
        <path
          fill="#ba7ba1"
          fill-opacity="1"
          d="M0,128L60,122.7C120,117,240,107,360,117.3C480,128,600,160,720,181.3C840,203,960,213,1080,181.3C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}

			{/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
	<Image />
	</div> */}
		</Layout>
	);
};

export default IndexPage;
