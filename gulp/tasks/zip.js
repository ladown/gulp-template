import { App } from '../../gulpfile.js';

export const zipBuild = async () => {
	await App.plugins.deleteSync(`${App.paths.projectName}-build-folder.zip`);

	return App.gulp
		.src(`${App.paths.buildFolder}/**/*.*`, { dot: true })
		.pipe(
			App.plugins.plumber(
				App.plugins.notify.onError({
					title: 'ZIP',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(App.plugins.gulpZip(`${App.paths.projectName}-build-folder.zip`))
		.pipe(App.gulp.dest('./'));
};

export const zipProject = async () => {
	await App.plugins.deleteSync(`${App.paths.projectName}-full-project.zip`);

	return App.gulp
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
			App.plugins.plumber(
				App.plugins.notify.onError({
					title: 'ZIP',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(App.plugins.gulpZip(`${App.paths.projectName}-full-project.zip`))
		.pipe(App.gulp.dest('./'));
};
