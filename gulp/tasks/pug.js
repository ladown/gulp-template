import { App } from '../../gulpfile.js';

export const pug = () => {
	return (
		App.gulp
			.src(App.paths.src.pug)
			.pipe(
				App.plugins.newer({
					dest: `${App.paths.buildFolder}/*.html`,
					extra: `${App.paths.sourcesFolder}/pug/{layouts,mixin}/*.pug`,
				}),
			)
			.pipe(
				App.plugins.plumber(
					App.plugins.notify.onError({
						title: 'PUG',
						message: 'Error: <%= error.message %>',
					}),
				),
			)
			.pipe(
				App.plugins.pug({
					pretty: false,
				}),
			)
			.pipe(
				App.plugins.replace(/<img.*?src="(.*?)".*?(>)/g, (match) => {
					var attrs = match.replace(/(<img |<img|>|\/>)/g, '');
					if (!attrs.includes('svg')) {
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
								<source type="image/webp" srcset=${webpSrc}>
								<img src=${src} ${subAttr.join(' ')} />
							</picture>`;

						return template;
					} else {
						return match;
					}
				}),
			)
			.pipe(
				App.plugins.replace(
					/(?:^|[^а-яёА-ЯЁ0-9_])(в|без|а|до|из|к|я|на|по|о|от|перед|при|через|с|у|за|над|об|под|про|для|и|или|со|около|между)(?:^|[^а-яёА-ЯЁ0-9_])/g,
					(match) => {
						const newText = match.slice(-1) == ' ' ? match.substr(0, match.length - 1) + '&nbsp;' : match;

						return newText;
					},
				),
			)
			// .pipe(App.plugins.ifPlugin(App.isBuild, App.plugins.htmlPrettify({ indent_char: '	', indent_size: 2 })))
			.pipe(App.gulp.dest(`${App.paths.buildFolder}/`))
			.pipe(
				App.plugins.browserSync.reload({
					stream: true,
				}),
			)
	);
};
