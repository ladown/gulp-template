export const vendors = () => {
	const staticFiles = app.gulp
		.src(app.paths.src.static, { dot: true })
		.pipe(app.plugins.newer(app.paths.build.static))
		.pipe(app.gulp.dest(app.paths.build.static));

	const fonts = app.gulp
		.src(app.paths.src.fonts)
		.pipe(app.plugins.newer(app.paths.build.fonts))
		.pipe(app.gulp.dest(app.paths.build.fonts));

	const videos = app.gulp
		.src(app.paths.src.videos)
		.pipe(app.plugins.newer(app.paths.build.videos))
		.pipe(app.gulp.dest(app.paths.build.videos));

	return app.plugins.merge(staticFiles, fonts, videos);
};
