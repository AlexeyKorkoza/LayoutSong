'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    refresh = require('gulp-livereload'),
    concat = require('gulp-concat'),
    jscpd = require('gulp-jscpd'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'app/js/*.js'
        ])
        .on('error', console.log)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(jscpd())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('css', function() {
    return gulp.src([
            'node_modules/hover.css/css/hover-min.css',
            'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
            'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
            'app/css/amazingslider-1.css',
            'app/css/fonts.css',
            'app/css/style.css',
            'app/css/media.css'
        ])
        .on('error', console.log)
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer('last 5 version', 'ie 9', 'ie 10'))
        .pipe(minifyCss())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('clean', function() {
    return del.sync('app/dist');
});

gulp.task('clear', function() {
    return cache.clearAll();
})

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('app/img'));
});

gulp.task('default', ['browser-sync', 'clean', 'img', 'css', 'scripts']);
