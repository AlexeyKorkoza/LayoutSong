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

gulp.task('js', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'node_modules/mediaelement/build/mediaelementplayer.min.js',
            'node_modules/mediaelement/build/lang/ru.js',
            'node_modules/social-buttons/src/js/*.js',
            'app/js/amazingslider.js',
            'app/js/froogaloop2.min.js',
            'app/js/initslider-1.js',
            'app/js/main.js'
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
            'node_modules/mediaelement/build/mediaelementplayer.min.css',
            'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
            'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
            'node_modules/social-buttons/src/css/SocialButtons.css',
            'app/css/amazingslider-1.css',
            'app/css/fonts.css',
            'app/css/style.css',
            'app/css/audio.css',
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

gulp.task('watch', ['js', 'css'], function () {
  gulp.watch('app/js/*.js', ['js'])
  gulp.watch('app/css/*.css', ['css'])
});

gulp.task('default', ['browser-sync', 'clean', 'img', 'css', 'js', 'watch']);
