// The require statement tells Node to look into the node_modules folder for a package
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
'use strict';

const {src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const bourbon = require('node-bourbon').includePaths;
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const removeCode = require('gulp-remove-code');
const sassLint = require('gulp-sass-lint');
const jshint = require('gulp-jshint');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

// ------------ DEVELOPMENT TASKS -------------

// COMPILE SCSS INTO CSS
function compileSCSS() {
    console.log('---------------COMPILING SCSS---------------');
    return src(['public/assets/src/scss/*.scss'])
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: 'map',
            sourceMap: 'scss',
            includePaths: bourbon
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('public/assets/css'));
}

// COPY CUSTOM JS
function compileJS() {
    console.log('---------------COMPILE CUSTOM.JS---------------');
    return src(['public/assets/src/js/app.js'])
        .pipe(babel())
        .pipe(dest('public/assets/js/'));
}

// SASS LINT
function scssLint() {
    console.log('---------------SASS LINTING---------------');
    return src('public/assets/src/scss/**/*.scss')
        .pipe(sassLint({
            configFile: '.scss-lint.yml'
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
}

// JS LINTER
function jsLint() {
    return src('public/assets/src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}

// WATCH FILES
function watchFiles() {
    watch(['public/assets/src/scss/**/*.scss', 'public/assets/src/scss/*.scss'] , compileSCSS);
    watch('public/assets/src/js/*.js', compileJS);
}

// ------------ PRODUCTION TASKS -------------

// MINIFY SCRIPTS
function minifyScripts() {
    console.log('---------------MINIFY SCRIPTS---------------');
    return src('public/assets/src/js/app.js')
        // .pipe(removeLog())
        .pipe(removeCode({
            production: true
        }))
        .pipe(uglify().on('error', console.error))
        .pipe(rename('app.min.js'))
        .pipe(dest('public/assets/js'));
}

// MINIFY CSS
function minifyCss() {
    console.log('---------------MINIFY CSS---------------');
    return src([
        'public/assets/vendor/css/**/*',
        'public/assets/css/main.css'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(cssmin())
    .pipe(rename('main.min.css'))
    .pipe(dest('public/assets/css'));
}

// RUN ALL LINTERS
exports.linters = series(scssLint, jsLint);

// DEV
exports.dev = series(parallel(compileJS, compileSCSS), watchFiles);

// PRODUCTION VERSION
exports.build = series(parallel(compileSCSS, compileJS), parallel(minifyScripts, minifyCss));
