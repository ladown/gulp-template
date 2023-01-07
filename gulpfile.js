import gulp from 'gulp';

import { paths } from './gulp/settings/paths.js';
import { plugins } from './gulp/settings/plugins.js';
import { configFTP } from './gulp/settings/ftp.js';

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	paths,
	gulp,
	plugins,
	configFTP,
};

import { clean } from './gulp/tasks/clean.js';
import { pug } from './gulp/tasks/pug.js';
import { pageList } from './gulp/tasks/pageList.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { icons } from './gulp/tasks/icons.js';
import { zipBuild, zipProject } from './gulp/tasks/zip.js';
import { deploy } from './gulp/tasks/deploy.js';
import { vendors } from './gulp/tasks/vendors.js';

const watcher = () => {
	gulp.watch(paths.watch.pug, { usePolling: true }, gulp.series(pug, pageList));
	gulp.watch(paths.watch.styles, { usePolling: true }, scss);
	gulp.watch(paths.watch.scripts, { usePolling: true }, js);
	gulp.watch(paths.watch.imgs, { usePolling: true }, images);
	gulp.watch(paths.watch.icons, { usePolling: true }, icons);
	gulp.watch([paths.watch.static, paths.watch.fonts, paths.watch.videos], { usePolling: true }, vendors);
};

const mainTasks = gulp.parallel(gulp.series(pug, pageList), scss, js, images, icons, vendors);

const devMode = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const buildMode = gulp.series(clean, mainTasks);
const zipBuildMode = gulp.series(buildMode, zipBuild);
const zipProjectMode = gulp.series(buildMode, zipProject);
const deployMode = gulp.series(buildMode, deploy);

gulp.task('default', devMode);
gulp.task('build', buildMode);
gulp.task('zipBuild', zipBuildMode);
gulp.task('zipProject', zipProjectMode);
gulp.task('deploy', deployMode);
