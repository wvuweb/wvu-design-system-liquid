'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var path = require('path');

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  return gulp.src(['./scss/*.scss', '!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('move-js-files', function () {
  gulp.src([
    './node_modules/twitter-fetcher/js/twitterFetcher_min.js',
    './node_modules/fontfaceobserver/fontfaceobserver.js',
    './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    './node_modules/responsive-nav/client/dist/responsive-nav.js'
  ], { base: './node_modules' })
  .pipe(rename(function (file) {
    // this removes the last parent directory of the relative file path
    if (file.dirname.split('/').length > 1){
      file.dirname = file.dirname.split('/')[0]
    }
  }))
  .pipe(gulp.dest('./javascripts/vendor'))
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
