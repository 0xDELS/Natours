const gulp =  require('gulp');
const sass = require('gulp-sass');
const stripCssComments = require('gulp-strip-css-comments');

sass.compiler = require('node-sass');

gulp.task('default', watch);

gulp.task('sass', compileSass);

function compileSass() {
    return gulp
        .src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(stripCssComments())
        .pipe(gulp.dest('src/css/'));
}

function watch(){
    gulp.watch('src/sass/**/*.scss', compileSass);
}