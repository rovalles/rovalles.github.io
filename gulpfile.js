const { src, dest, series } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function js(){
  return src([
      'src/javascripts/*.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(dest('dist/'));
}

exports.default = series(js);
