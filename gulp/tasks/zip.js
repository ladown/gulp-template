export const zipBuild = async () => {
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

export const zipProject = async () => {
	await app.plugins.deleteSync(`${app.paths.rootFolder}.zip`);

	return app.gulp
		.src(
			[
				`${app.paths.rootFolder}/**/*.*`,
				`!${app.paths.rootFolder}/.git/**/*.*`,
				`!${app.paths.rootFolder}/node_modules/**/*.*`,
				`!${app.paths.rootFolder}/.DS_Store/**/*.*`,
				`!${app.paths.rootFolder}/.husky/_/**/*.*`,
			],
			{ dot: true },
		)
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
