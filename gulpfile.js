var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var inline = require('gulp-inline')
var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
  gulp.src('src/*.html')
    .pipe(inline({
      base: 'src/',
      css: minifyCss,
      disabledTypes: ['svg', 'img', 'js']
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

  gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist'));
});
