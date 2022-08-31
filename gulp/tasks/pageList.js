import glob from 'glob';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { paths } from '../settings/paths.js';
import { capitalizeFirstLetter } from '../settings/utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const folderPath = __dirname.trim().split('/');
const projectName = folderPath[folderPath.length - 3]
	.replace(/-|_/gm, ' ')
	.toLowerCase()
	.trim()
	.split(' ')
	.map((el) => capitalizeFirstLetter(el))
	.join(' ');

export const pageList = () => {
	const pages = glob.sync(`${paths.build.pug}**/*.html`);
	let pageList = '<ol>';

	return app.gulp
		.src(`${paths.build.pug}index.html`)
		.pipe(
			app.plugins.replace(/<div id="update-this"><\/div>/g, () => {
				pages.map((file) => {
					const fileHref = file.replace('build/', '');

					const content = fs.readFileSync(file, 'utf8');

					const fileName = content
						.match(/<title>(.*?)<\/title>/g)
						.toString()
						.replace(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g, '');

					if (fileHref.indexOf('index.html') === -1)
						pageList += `<li><a href="${fileHref}" target="_blank">${fileName}</a></li>`;
				});

				pageList += '</ol>';

				return pageList;
			}),
		)
		.pipe(
			app.plugins.replace(/#project/g, () => {
				return projectName;
			}),
		)
		.pipe(app.gulp.dest(paths.build.pug));
};
