export const js = () => {
	return app.gulp
		.src(app.paths.src.scripts)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'JS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(
			app.plugins.webpack({
				mode: app.isBuild ? 'production' : 'development',

				devtool: app.isBuild ? false : 'eval-cheap-source-map',

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
								app.plugins.MiniCssExtractPlugin.loader,
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
		.pipe(app.gulp.dest(app.paths.build.scripts))
		.pipe(
			app.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
