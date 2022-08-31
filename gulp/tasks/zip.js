export const zip = async () => {
	await app.plugins.deleteSync(`${app.paths.rootFolder}.zip`);

	return app.gulp
		.src(`${app.paths.buildFolder}/**/*.*`, { dot: true })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'ZIP',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(app.plugins.gulpZip(`${app.paths.rootFolder}.zip`))
		.pipe(app.gulp.dest('./'));
};
