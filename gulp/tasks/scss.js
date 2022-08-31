export const scss = () => {
	return app.gulp
		.src(app.paths.src.styles, { sourcemaps: app.isDev })
		.pipe(app.plugins.sassGlob())
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(app.plugins.sass())
		.pipe(app.plugins.ifPlugin(app.isBuild, app.plugins.autoprefixer({ grid: true, cascade: true })))
		.pipe(
			app.plugins.webpCss({
				webpClass: '.webp',
				noWebpClass: '.no-webp',
			}),
		)
		.pipe(
			app.plugins.postcss([
				app.plugins.postcssSortMediaQueries({
					sort: 'desktop-first',
				}),
			]),
		)
		.pipe(app.plugins.ifPlugin(app.isBuild, app.plugins.postcss(app.plugins.postcssPlugins)))
		.pipe(app.plugins.ifPlugin(app.isBuild, app.plugins.cleanCss()))
		.pipe(app.gulp.dest(app.paths.build.styles))
		.pipe(
			app.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
