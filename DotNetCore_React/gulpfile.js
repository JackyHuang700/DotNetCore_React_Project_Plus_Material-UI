'use strict'

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();



gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./wwwroot/css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./wwwroot/css'))
    .pipe(browserSync.stream());
});

// Watching SCSS files
// gulp.task('sass:watch', function () {
//   gulp.watch('./scss/**/*.scss', ['browser-sync', 'sass']);
// });

//open port 3000
gulp.task('browser-sync', ['sass'], function () {
  browserSync.init({
    proxy: "http://localhost:8080",
    // proxy: "http://localhost:5000",
    open: false,
  });

  gulp.watch('./scss/**/*.scss', ['sass']);

});


gulp.task('default', ['browser-sync']);
