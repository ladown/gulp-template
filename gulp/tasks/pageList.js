import glob from 'glob';
import fs from 'fs';
import { paths } from '../settings/paths.js';
import { App } from '../../gulpfile.js';

export const pageList = () => {
	const pages = glob.sync(`${paths.build.pug}**/*.html`);
	let pageList = '<ol class="page-list__items">';

	return App.gulp
		.src(`${paths.build.pug}page-list.html`)
		.pipe(
			App.plugins.replace(/<div id="page-list"><\/div>/g, () => {
				pages.map((file) => {
					const fileHref = file.includes('index')
						? file.replace('./build/index.html', '/')
						: file.replace('build/', '');

					const content = fs.readFileSync(file, 'utf8');

					const fileName = content
						.match(/<title>(.*?)<\/title>/g)
						.toString()
						.replace(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g, '');

					if (fileHref.indexOf('page-list.html') === -1)
						pageList += `<li class="page-list__item"><a href="${fileHref}" class="page-list__link" target="_blank">${fileName}</a></li>`;
				});

				pageList += '</ol>';

				return pageList;
			}),
		)
		.pipe(
			App.plugins.replace(/#project-name/g, () => {
				return App.paths.projectName;
			}),
		)
		.pipe(App.gulp.dest(paths.build.pug));
};
