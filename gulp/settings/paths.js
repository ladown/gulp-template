import path from 'path';

const sourcesFolder = './src';
const buildFolder = './build';
const rootFolder = path.basename(path.resolve());

export const paths = {
	src: {
		pug: `${sourcesFolder}/pug/pages/**/*.pug`,
		styles: `${sourcesFolder}/scss/app.scss`,
		scripts: `${sourcesFolder}/js/app.js`,
		imgs: `${sourcesFolder}/img/**/*.*`,
		icons: `${sourcesFolder}/icons/**/*.svg`,
		static: `${sourcesFolder}/static/**/*.*`,
		fonts: `${sourcesFolder}/fonts/**/*.*`,
	},

	build: {
		pug: `${buildFolder}/`,
		styles: `${buildFolder}/css/`,
		scripts: `${buildFolder}/js/`,
		imgs: `${buildFolder}/img/`,
		icons: `${buildFolder}/icons/`,
		static: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
	},

	watch: {
		pug: `${sourcesFolder}/pug/**/*.*`,
		styles: `${sourcesFolder}/scss/**/*.*`,
		scripts: `${sourcesFolder}/js/**/*.*`,
		imgs: `${sourcesFolder}/img/**/*.*`,
		icons: `${sourcesFolder}/icons/*.*`,
		static: `${sourcesFolder}/static/**/*.*`,
		fonts: `${sourcesFolder}/fonts/**/*.*`,
	},

	rootFolder,
	sourcesFolder,
	buildFolder,
	clean: buildFolder,
	ftp: '/test2.ermilovee.ru/public_html/',
};
