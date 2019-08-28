const path = require('path')

module.exports = {
	contentBase: path.resolve(__dirname, './dist'),
	host: '172.17.37.71',
	port: 9002,
	hot: true,
	historyApiFallback: {
		rewrites: [
			{ from: /./, to: '/static/views/app.html' },
		],
	},
	// proxy: {
	// 	'/api': 'http://10.62.237.48:7001',
	// },
	compress: true,
}
