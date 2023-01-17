import { App } from '../../gulpfile.js';

export const ftpClean = (cb) => {
	const ftpConnect = App.plugins.vinylFTP.create(App.configFTP);

	return ftpConnect.rmdir(App.paths.ftp, function (err) {
		if (err) {
			App.plugins.log(err);
		}
		cb();
	});
};
