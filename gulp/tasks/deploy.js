import { App } from '../../gulpfile.js';

export const deploy = () => {
	const ftpConnect = App.plugins.vinylFTP.create(App.configFTP);

	return (
		App.gulp
			.src(`${App.paths.buildFolder}/**/*.*`, { dot: true })
			.pipe(
				App.plugins.plumber(
					App.plugins.notify.onError({
						title: 'FTP',
						message: 'Error: <%= error.message %>',
					}),
				),
			)
			// .pipe(ftpConnect.clean(`${App.paths.ftp}/**`, '/'))
			// .pipe(ftpConnect.clean(`${App.paths.ftp}/**`, '.', { base: App.paths.ftp }))
			.pipe(ftpConnect.dest(App.paths.ftp))
	);
};
