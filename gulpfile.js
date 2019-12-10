'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var del = require('del');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload

var path = {
    web: { 
        js: 'web/js/',
        css: 'web/css/',
        img: 'web/img/',
        fonts: 'web/fonts/'
    },
    src: { 
        js: 'src/js/**/*.js',
        sass: 'src/sass/**/*.scss',
        img: 'src/img/**/*.*', 
        fonts: 'src/fonts/**/*.*'
    }
};

gulp.task('style:build', function(){
  return gulp.src(path.src.sass)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest(path.web.css))
});

gulp.task('js:build', function(){
  return gulp.src(path.src.js)
    .pipe(uglify())
    .pipe(gulp.dest(path.web.js))
});

gulp.task('image:build', function () {
    return gulp.src(path.src.img) 
        .pipe(imagemin({ 
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.web.img))
});

gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts) 
        .pipe(gulp.dest(path.web.fonts))
});

gulp.task('browserSync', function() {
   browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false,
    livereload: true,
    watch: true
  });
});

gulp.task('watch', function () {
    gulp.watch(path.src.sass, gulp.series(['style:build']));
    gulp.watch(path.src.js, gulp.series(['js:build']));
    gulp.watch(path.src.img, gulp.series(['image:build']));
    gulp.watch(path.src.fonts, gulp.series(['fonts:build']));
});

gulp.task('clean', function () {
  return del([ 'web/*' ]);
});

gulp.task('proj:build', gulp.series([
    'clean',
    'style:build',
    'js:build',
    'fonts:build',
    'image:build',
    'browserSync'  
]));

gulp.task('default', gulp.series(['proj:build', 'watch']));