import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';

// import { FaJs } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";

// export function ProjectImage() {
// 	return <StaticImage src="../images/project1" alt="NextProtfolio" />;
// }

const StyledProject = styled.div`
	position: relative;
	display: flex;

	background-color: rgba(0, 0, 0, 0.8);

	.gatsby-image-wrapper {
		position: relative;
		top: -1rem;
		left: -1rem;
	}

	.details {
		padding: 2rem;

		.highlight {
			color: var(--pink);
			font-family: Tomorrow;
		}
	}
`;

export default function Project({ image, title, text }) {
	return (
		<StyledProject>
			<div className="image-wrap">
				<StaticImage
					src="../images/project1.PNG"
					alt={title}
					placeholder="blurred"
					layout="fixed"
					width={200}
					height={200}
				/>
			</div>
			<div className="details">
				<h3>{title}</h3>
				{parse(`${text}`)}
			</div>
		</StyledProject>
	);
}
