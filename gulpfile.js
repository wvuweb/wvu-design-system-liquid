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
    './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'
  ], { base: './node_modules' })
  .pipe(rename(function (file) {
    // this removes extraneous directories on the file path
    // eg.  node_modules/package/file/path/filename.ext  => package/filename.ext
    if (file.dirname.split('/').length > 1){
      file.dirname = path.dirname(file.dirname);
    }
  }))
  .pipe(gulp.dest('./javascripts/vendor'))
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
