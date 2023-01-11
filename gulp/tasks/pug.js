import fs from 'fs';

export const pug = () => {
	return (
		app.gulp
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
				app.plugins.ifPlugin(
					app.isBuild,
					app.plugins.versionNumber({
						value: '%DT%',
						append: {
							key: '_v',
							cover: 0,
							to: ['css', 'js'],
						},
					}),
				),
			)
			.pipe(
				app.plugins.replace(/<img.*?src="(.*?)".*?(>)/g, (match) => {
					var attrs = match.replace(/(<img |<img|>|\/>)/g, '');
					var src,
						webpSrc,
						subAttr = [],
						mediaResponsive = '',
						template;

					attrs.match(/(\S+)=(["']?)([^\\\2]*?(?:\\[^\2].*?)*)(\2|$|>)/g).forEach((element) => {
						if (element.indexOf('src') !== -1) {
							src = element.match(/("|')(.*?)("|').*?/g).toString();
							webpSrc = src.replace(/(gif|jpg|jpeg|tiff|png)/g, 'webp');
						} else if (element.indexOf('responsive') !== -1) {
							const value = element.match(/(["'])(?:(?=(\\?))\2.)*?\1/g).toString();

							if (value && value !== '' && value !== '""') {
								const responsive = value.replace(/["']/g, '').replace(/ /g, '');
								const points = responsive.split(',');

								points.forEach((size) => {
									const sizeData = size.split(':');

									const webpMediaUrl = sizeData[1].replace(/(gif|jpg|jpeg|tiff|png)/g, 'webp');

									mediaResponsive += `<source media="(max-width: ${sizeData[0]}px)" type="image/webp" srcset="${webpMediaUrl}"><source media="(max-width: ${sizeData[0]}px)" srcset="${sizeData[1]}">`;
								});
							}
						} else {
							subAttr.push(element.trim());
						}
					});

					template = `<picture>
								${mediaResponsive}
								<source srcset=${webpSrc} type="image/webp">
								<img src=${src} ${subAttr.join(' ')} />
							</picture>`;

					if (!webpSrc.includes('svg')) return template;
					else return match;
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
			.pipe(
				app.plugins.replace(
					/(?:^|[^а-яёА-ЯЁ0-9_])(в|без|а|до|из|к|я|на|по|о|от|перед|при|через|с|у|за|над|об|под|про|для|и|или|со|около|между)(?:^|[^а-яёА-ЯЁ0-9_])/g,
					(match) => {
						const newText = match.slice(-1) == ' ' ? match.substr(0, match.length - 1) + '&nbsp;' : match;

						return newText;
					},
				),
			)
			// .pipe(app.plugins.ifPlugin(app.isBuild, app.plugins.htmlPrettify({ indent_char: '	', indent_size: 2 })))
			.pipe(app.gulp.dest(`${app.paths.buildFolder}/`))
			.pipe(
				app.plugins.browserSync.reload({
					stream: true,
				}),
			)
	);
};
