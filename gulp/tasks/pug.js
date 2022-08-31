import fs from 'fs';

export const pug = () => {
	return app.gulp
		.src(app.paths.src.pug)
		.pipe(app.plugins.newer(`${app.paths.buildFolder}/*.html`))
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'PUG',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(
			app.plugins.pug({
				pretty: false,
			}),
		)
		.pipe(
			app.plugins.replace(/<svg.*?(>)/g, (match) => {
				let viewport = match.match(/viewBox=\"([^']*?)\"/g).toString();

				if (viewport !== 'viewBox=""') {
					return match;
				}

				const name = match
					.match(/\bicon-[a-zA-Z]*\b/g)
					.toString()
					.replace('icon-', '');

				viewport = fs
					.readFileSync(`src/icons/${name}.svg`, 'utf8')
					.match(/viewBox=\"([^']*?)\"/g)
					.toString();

				const changed = match.replace(/viewBox=\"([^']*?)\"/g, viewport);

				return changed;
			}),
		)
		.pipe(app.plugins.gulpWebpHtmlNosvg())
		.pipe(
			app.plugins.replace(
				/(?:^|[^а-яёА-ЯЁ0-9_])(в|без|а|до|из|к|я|на|по|о|от|перед|при|через|с|у|за|над|об|под|про|для|и|или|со)(?:^|[^а-яёА-ЯЁ0-9_])/g,
				(match) => {
					const newText = match.slice(-1) == ' ' ? match.substr(0, match.length - 1) + '&nbsp;' : match;

					return newText;
				},
			),
		)
		.pipe(app.plugins.ifPlugin(app.isBuild, app.plugins.htmlPrettify({ indent_char: '	', indent_size: 2 })))
		.pipe(app.gulp.dest(`${app.paths.buildFolder}/`))
		.pipe(
			app.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
