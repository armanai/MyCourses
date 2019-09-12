var path = require('path')
var glob = require('glob')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
	SRC: path.resolve(__dirname, 'src'),
	APP: path.resolve(__dirname, 'src/app')
}

module.exports = {
	entry: [
		'./src/app/index.js',
		...glob.sync(path.join(paths.SRC, '*.scss')),
		...glob.sync(path.join(paths.APP, '**/*.scss'))
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
}
