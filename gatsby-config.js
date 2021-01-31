module.exports = {
	siteMetadata: {
		title: 'website2021',
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-transition-link`,
			options: {
				injectPageProps: false,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/,
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
			__key: 'images',
		},
	],
};
