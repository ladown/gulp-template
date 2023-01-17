import { App } from '../../gulpfile.js';

export const icons = () => {
	return App.gulp
		.src(App.paths.src.icons)
		.pipe(
			App.plugins.plumber(
				App.plugins.notify.onError({
					title: 'ICONS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(
			App.plugins.svgMin({
				js2svg: {
					pretty: true,
				},
			}),
		)
		.pipe(
			App.plugins.cheerio({
				run: ($) => {
					$('[fill]:not(.dont-remove)').removeAttr('fill');
					$('[stroke]:not(.dont-remove)').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: { xmlMode: true },
			}),
		)
		.pipe(App.plugins.replace('&gt;', '>'))
		.pipe(
			App.plugins.svgSprite({
				mode: {
					symbol: {
						sprite: '../sprite.svg',
					},
				},
			}),
		)
		.pipe(App.gulp.dest(App.paths.build.icons))
		.pipe(
			App.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
