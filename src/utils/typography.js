// src/utils/typography.js

import Typography from 'typography';

const typography = new Typography({
	baseFontSize: '18px',
	baseLineHeight: 1.666,
	googleFonts: [
		{ name: 'Alegreya Sans', styles: [400] },
		{ name: 'Tomorrow', styles: [400, 500, 600, 700] },
	],
	headerFontFamily: ['Tomorrow', 'sans-serif'],
	bodyFontFamily: ['Alegreya Sans', 'serif'],
});

export default typography;
