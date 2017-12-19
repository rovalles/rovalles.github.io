let gulp = require('gulp');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let sass = require('gulp-sass');


gulp.task('default', function() {
    gulp.src([
      'src/stylesheets/main.scss'
    ])
    // .pipe( sass({outputStyle: 'compressed'} ).on('error', sass.logError) )
    .pipe( sass().on('error', sass.logError) )
    .pipe( concat('bundle.css') )
    .pipe( gulp.dest('dist') );

    gulp.src([
      'bower_components/moment/min/moment.min.js',
      'bower_components/handlebars/handlebars.min.js',
      'bower_components/jquery/dist/jquery.min.js',
      'src/javascripts/*.js'
    ])
    .pipe( uglify() )
    .pipe( concat('bundle.js') )
    .pipe( gulp.dest('dist') );
});
