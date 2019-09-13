'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var path = require('path');

// This task moves JS files from our node_modules folder to the
// root `javascripts/vendor` folder.
// It runs automatically after `npm install/ci` or can be run via
// `npm run postinstall` OR `gulp move-js-files`.
gulp.task('move-js-files', function () {
  gulp.src([
    './node_modules/twitter-fetcher/js/twitterFetcher_min.js',
    './node_modules/fontfaceobserver/fontfaceobserver.js',
    './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    './node_modules/responsive-nav/client/dist/responsive-nav.js'
  ], { base: './node_modules' })
    .pipe(rename(function (file) {
    // this removes the last parent directory of the relative file path
      if (file.dirname.split('/').length > 1) {
        file.dirname = file.dirname.split('/')[0];
      }
    }))
    .pipe(gulp.dest('./javascripts/vendor'));
});

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  return gulp.src(['./scss/*.scss', '!./scss/_*.scss'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
