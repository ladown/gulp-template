import { App } from '../../gulpfile.js';

export const scss = () => {
	return App.gulp
		.src(App.paths.src.styles, { sourcemaps: App.isDev })
		.pipe(App.plugins.sassGlob())
		.pipe(
			App.plugins.plumber(
				App.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(App.plugins.sass())
		.pipe(App.plugins.ifPlugin(App.isBuild, App.plugins.autoprefixer({ grid: true, cascade: true })))
		.pipe(
			App.plugins.webpCss({
				webpClass: '.webp',
			}),
		)
		.pipe(
			App.plugins.postcss([
				App.plugins.postcssSortMediaQueries({
					sort: 'desktop-first',
				}),
			]),
		)
		.pipe(App.plugins.ifPlugin(App.isBuild, App.plugins.postcss(App.plugins.postcssPlugins)))
		.pipe(App.plugins.ifPlugin(App.isBuild, App.plugins.cleanCss()))
		.pipe(App.gulp.dest(App.paths.build.styles))
		.pipe(
			App.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
