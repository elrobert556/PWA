module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,jpg,webp,png,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};