import { App } from '../../gulpfile.js';

export const vendors = () => {
	const staticFiles = App.gulp
		.src(App.paths.src.static, { dot: true })
		.pipe(App.plugins.newer(App.paths.build.static))
		.pipe(App.gulp.dest(App.paths.build.static));

	const fonts = App.gulp
		.src(App.paths.src.fonts)
		.pipe(App.plugins.newer(App.paths.build.fonts))
		.pipe(App.gulp.dest(App.paths.build.fonts));

	const videos = App.gulp
		.src(App.paths.src.videos)
		.pipe(App.plugins.newer(App.paths.build.videos))
		.pipe(App.gulp.dest(App.paths.build.videos));

	return App.plugins.merge(staticFiles, fonts, videos);
};
