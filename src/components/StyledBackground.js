import React from 'react';
import styled from 'styled-components';

const DottedBg = styled.div`
	background: radial-gradient(var(--pink) 0.1px, rgb(0, 0, 0) 1px);
	background-size: 50px 50px;
	min-height: 100vh;
	height: 100%;
	padding-bottom: 5rem;
	position: relative;
	z-index: 1;
`;

const BgOverlay = styled.div`
	background-color: rgba(12, 14, 32, 0.7);
	background: var(--pink);
	padding-bottom: 5rem;
	background: -webkit-linear-gradient(
		to bottom,
		rgba(12, 14, 32, 0.5),
		rgba(40, 44, 85, 0.6)
	);
	background: linear-gradient(
		to bottom,
		rgba(12, 14, 32, 0.5),
		rgba(40, 44, 85, 0.8)
	);
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
`;

const StyledBackground = ({ children }) => (
	<DottedBg>
		<BgOverlay />
		{children}
	</DottedBg>
);

export default StyledBackground;
