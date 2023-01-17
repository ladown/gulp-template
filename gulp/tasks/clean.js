import { App } from '../../gulpfile.js';

export const clean = async () => {
	return await App.plugins.deleteSync(App.paths.clean);
};
