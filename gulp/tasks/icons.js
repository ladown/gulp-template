export const icons = () => {
	return app.gulp
		.src(app.paths.src.icons)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'ICONS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(
			app.plugins.svgMin({
				js2svg: {
					pretty: true,
				},
			}),
		)
		.pipe(
			app.plugins.cheerio({
				run: ($) => {
					$('[fill]:not(.dont-remove)').removeAttr('fill');
					$('[stroke]:not(.dont-remove)').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: { xmlMode: true },
			}),
		)
		.pipe(app.plugins.replace('&gt;', '>'))
		.pipe(
			app.plugins.svgSprite({
				mode: {
					symbol: {
						sprite: '../sprite.svg',
					},
				},
			}),
		)
		.pipe(app.gulp.dest(app.paths.build.icons))
		.pipe(
			app.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
