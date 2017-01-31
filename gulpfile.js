var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function(){
  return gulp.src('viewspug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('views'))
});

gulp.task('css', function(){
  return gulp.src('styleless/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('style'))
});

gulp.task('default', function(){

  gulp.watch('styleless/*.less',[ 'css']);
  gulp.watch('viewspug/*.pug',[ 'html']);
});
