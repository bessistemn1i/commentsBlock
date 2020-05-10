'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const htmlBeautify = require('gulp-html-beautify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const sassImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');
const webPack = require('webpack');
const webpack = require('webpack-stream');
// Paths
const dirs = {
  pug: './src/pug/**/*.pug',
  scss: './src/scss/**/*.scss',
  styles: './src/scss/styles.scss',
  js: './src/js/**/*.js',
  dist: './dist'
};

// Webpack config
const webpackConfig = {
  entry: {
    scripts: './src/js/scripts.js'
  },

  output: {
    filename: '[name].js'
  },

  //mode: 'production'
  mode: 'development',

  plugins: [
    new webPack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};


/**
 * Renders html from pug
 */
let pugRender = () => (
  gulp.src(dirs.pug)
    .pipe(pug())
    .pipe(htmlBeautify())
    .pipe(gulp.dest(dirs.dist))
);


/**
 * Compiles scss files to styles.css
 */
let styles = () => (
  gulp.src(dirs.scss)
    .pipe(sass({ importer: sassImporter() }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso({comments: 'exclamation'}))
    .pipe(gulp.dest(dirs.dist))
    .pipe(browserSync.reload({stream: true}))
);


/**
 * Compiles js files
 */
let scripts = () => (
  gulp.src(dirs.js)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(dirs.dist))
);


/**
 * Runs browserSync server
 * @param {Function} done callback
 */
let browserSyncInit = () => {
  browserSync.init({
    server: {
      baseDir: dirs.dist
    },
    port: 3000,
    online: true
  });
};


/**
 * Reloads browserSync server
 * @param {Function} done callback
 */
let browserSyncReload = (done) => {
  browserSync.reload();
  done();
};


/**
 * Watches files for changes
 */
let watch = () => {
  browserSyncInit();

  gulp.watch(dirs.pug, gulp.series(pugRender, browserSyncReload));
  gulp.watch(dirs.scss, gulp.parallel(styles));
  gulp.watch(dirs.js, gulp.series(scripts, browserSyncReload));
};


exports.pugRender = pugRender;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
