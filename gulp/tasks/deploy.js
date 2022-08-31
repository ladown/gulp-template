export const deploy = () => {
	app.configFTP.log = app.plugins.util.log;

	const ftpConnect = app.plugins.vinylFTP.create(app.configFTP);

	return app.gulp
		.src(`${app.paths.buildFolder}/**/*.*`, { dot: true })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'FTP',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(ftpConnect.dest(`/${app.paths.ftp}/${app.paths.rootFolder}`));
};
