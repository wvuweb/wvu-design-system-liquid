'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  return gulp.src(['./scss/*.scss', '!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'))
    .pipe(gulp.dest('./public/css'))
    .pipe(gulp.dest('../cleanslate_themes/wvu-design-system-test-frameworks/stylesheets'))
    .pipe(gulp.dest('../cleanslate_themes/wvu-design-system-components/stylesheets'));
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
