export const server = (done) => {
	app.plugins.browserSync.init({
		startPath: '/page-list.html',
		server: {
			baseDir: app.paths.build.pug,
		},
		notify: false,
	});
};
