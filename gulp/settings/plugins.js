import replace from 'gulp-replace';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import htmlPrettify from 'gulp-html-prettify';
import browserSync from 'browser-sync';
import { deleteSync } from 'del';
import sassGlob from 'gulp-sass-glob';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import postcss from 'gulp-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import postcssMergeLonghand from 'postcss-merge-longhand';
import postcssSortMediaQueries from 'postcss-sort-media-queries';
import webpack from 'webpack-stream';
import imagemin from 'gulp-imagemin';
import gifsicle from 'imagemin-gifsicle';
import jpegtran from 'imagemin-jpegtran';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';
import svgMin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import svgSprite from 'gulp-svg-sprite';
import ifPlugin from 'gulp-if';
import gulpZip from 'gulp-zip';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';
import webpCss from 'gulp-webpcss';
import webp from 'gulp-webp';
import merge from 'merge-stream';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import versionNumber from 'gulp-version-number';

const sass = gulpSass(dartSass);

export const plugins = {
	deleteSync,
	replace,
	notify,
	newer,
	plumber,
	pug,
	htmlPrettify,
	browserSync,
	sass,
	rename,
	sassGlob,
	autoprefixer,
	cleanCss,
	postcss,
	postcssSortMediaQueries,
	postcssPlugins: [postcssPresetEnv, postcssMergeLonghand],
	webpack,
	imagemin,
	gifsicle,
	jpegtran,
	optipng,
	svgo,
	svgMin,
	cheerio,
	svgSprite,
	ifPlugin,
	gulpZip,
	vinylFTP,
	util,
	webpCss,
	webp,
	merge,
	MiniCssExtractPlugin,
	versionNumber,
};
