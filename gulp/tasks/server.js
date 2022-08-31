export const server = (done) => {
	app.plugins.browserSync.init({
		server: {
			baseDir: app.paths.build.pug,
		},
		notify: false,
	});
};
