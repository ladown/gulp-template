import { App } from '../../gulpfile.js';

export const images = () => {
	return App.gulp
		.src(App.paths.src.imgs)
		.pipe(
			App.plugins.plumber(
				App.plugins.notify.onError({
					title: 'IMAGES',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(App.plugins.newer(App.paths.build.imgs))
		.pipe(App.plugins.webp())
		.pipe(App.gulp.src(App.paths.src.imgs))
		.pipe(App.gulp.dest(App.paths.build.imgs))
		.pipe(
			App.plugins.ifPlugin(
				App.isBuild,
				App.plugins.imagemin([
					App.plugins.gifsicle({ interlaced: true }),
					App.plugins.jpegtran({ quality: 'hight', progressive: true }),
					App.plugins.optipng({ optimizationLevel: 5, quality: [0.7, 1] }),
					App.plugins.svgo({
						plugins: ['preset-default'],
					}),
				]),
			),
		)
		.pipe(App.gulp.dest(App.paths.build.imgs))
		.pipe(
			App.plugins.browserSync.reload({
				stream: true,
			}),
		);
};
