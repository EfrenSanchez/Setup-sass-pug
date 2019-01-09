var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

//gulp sass
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
  .pipe(sass())// Converts Sass to Css with gulp-sass
  .pipe(minifyCSS())
  .pipe(concat('style_main.min.css'))
  .pipe(gulp.dest('public/stylesheets'))
});

//gulp watch
gulp.task('watch', () => {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
});