let gulp = require('gulp');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');


gulp.task('default', function() {
    gulp.src([
        'bower_components/moment/min/moment.min.js',
        'bower_components/handlebars/handlebars.min.js',
        'bower_components/jquery/dist/jquery.min.js',
        'src/javascripts/*.js'
    ])
    .pipe( uglify() )
    .pipe( concat('main.min.js') )
    .pipe( gulp.dest('dist') );
});
