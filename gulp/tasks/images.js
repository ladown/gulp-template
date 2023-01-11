export const images = () => {
	return app.gulp
		.src(app.paths.src.imgs)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'IMAGES',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(app.plugins.newer(app.paths.build.imgs))
		.pipe(app.plugins.webp())
		.pipe(app.gulp.src([app.paths.src.imgs, `!${app.paths.src.favicon}`]))
		.pipe(app.gulp.dest(app.paths.build.imgs))
		.pipe(
			app.plugins.ifPlugin(
				app.isBuild,
				app.plugins.imagemin([
					app.plugins.gifsicle({ interlaced: true }),
					app.plugins.jpegtran({ quality: 'hight', progressive: true }),
					app.plugins.optipng({ optimizationLevel: 5, quality: [0.7, 1] }),
					app.plugins.svgo({
						plugins: ['preset-default'],
					}),
				]),
			),
		)
		.pipe(app.gulp.dest(app.paths.build.imgs))
		.pipe(
			app.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
