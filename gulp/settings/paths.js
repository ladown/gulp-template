import path from 'path';
import packageJson from '../../package.json' assert { type: 'json' };

const sourcesFolder = './src';
const buildFolder = './build';
const rootFolder = path.basename(path.resolve());

export const paths = {
	src: {
		pug: `${sourcesFolder}/pug/pages/**/*.pug`,
		styles: [`${sourcesFolder}/scss/vendors.scss`, `${sourcesFolder}/scss/app.scss`],
		scripts: `${sourcesFolder}/js/app.js`,
		imgs: `${sourcesFolder}/img/**/*.*`,
		videos: `${sourcesFolder}/video/**/*.*`,
		icons: `${sourcesFolder}/icons/**/*.svg`,
		static: `${sourcesFolder}/static/**/*.*`,
		fonts: `${sourcesFolder}/fonts/**/*.*`,
	},

	build: {
		pug: `${buildFolder}/`,
		styles: `${buildFolder}/css/`,
		scripts: `${buildFolder}/js/`,
		imgs: `${buildFolder}/img/`,
		videos: `${sourcesFolder}/video/`,
		icons: `${buildFolder}/icons/`,
		static: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
	},

	watch: {
		pug: `${sourcesFolder}/pug/**/*.*`,
		styles: `${sourcesFolder}/scss/**/*.*`,
		scripts: `${sourcesFolder}/js/**/*.*`,
		imgs: `${sourcesFolder}/img/**/*.*`,
		videos: `${sourcesFolder}/video/**/*.*`,
		icons: `${sourcesFolder}/icons/*.*`,
		static: `${sourcesFolder}/static/**/*.*`,
		fonts: `${sourcesFolder}/fonts/**/*.*`,
	},

	projectName: packageJson.name,
	rootFolder,
	sourcesFolder,
	buildFolder,
	clean: buildFolder,
	ftp: '/',
};
