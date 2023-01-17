import { App } from '../../gulpfile.js';

export const server = () => {
	App.plugins.browserSync.init({
		startPath: '/page-list.html',
		server: {
			baseDir: App.paths.build.pug,
		},
		notify: false,
	});
};
