export const zipBuild = async () => {
	await app.plugins.deleteSync(`${app.paths.projectName}-build-folder.zip`);

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
		.pipe(app.plugins.gulpZip(`${app.paths.projectName}-build-folder.zip`))
		.pipe(app.gulp.dest('./'));
};

export const zipProject = async () => {
	await app.plugins.deleteSync(`${app.paths.projectName}-full-project.zip`);

	return app.gulp
		.src(
			[
				'./**/*.*',
				'!./.git',
				'!./.git/**/*.*',
				'!./node_modules/**/*.*',
				'!./.DS_Store',
				'!./.husky',
				'!./.husky/**/*.*',
			],
			{
				dot: true,
			},
		)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'ZIP',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(app.plugins.gulpZip(`${app.paths.projectName}-full-project.zip`))
		.pipe(app.gulp.dest('./'));
};
