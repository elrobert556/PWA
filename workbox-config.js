module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,jpg,webp,png,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	importScripts: ['custom-sw.js']
};