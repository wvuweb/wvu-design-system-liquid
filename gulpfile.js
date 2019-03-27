'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  return gulp.src(['./scss/*.scss', '!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('scripts', function() {
  return gulp.src(['./javascripts/vendor/responsive-nav-dropdowns.js', './javascripts/responsive-nav-dropdown--custom.js', './javascripts/vendor/jquery.magnific-popus.js', './javascripts/vendor/twitterFetcher.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascripts/'));
});
