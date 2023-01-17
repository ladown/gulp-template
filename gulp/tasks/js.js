import { App } from '../../gulpfile.js';

export const js = () => {
	return App.gulp
		.src(App.paths.src.scripts)
		.pipe(
			App.plugins.plumber(
				App.plugins.notify.onError({
					title: 'JS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(
			App.plugins.webpack({
				mode: App.isBuild ? 'production' : 'development',

				devtool: App.isBuild ? false : 'eval-cheap-source-map',

				target: 'web',

				output: {
					filename: 'app.js',
				},

				module: {
					rules: [
						{
							test: /\.(js)$/,
							exclude: /(node_modules|bower_components)/,
							use: 'babel-loader',
							resolve: {
								fullySpecified: false,
							},
						},

						{
							test: /\.(c|sa|sc)ss$/i,
							use: [
								App.plugins.MiniCssExtractPlugin.loader,
								'css-loader',
								'postcss-loader',
								'sass-loader',
							],
						},
					],
				},

				resolve: {
					extensions: ['.js'],
				},
			}),
		)
		.pipe(App.gulp.dest(App.paths.build.scripts))
		.pipe(
			App.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
