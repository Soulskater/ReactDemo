const gulp = require("gulp");
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const concat = require('gulp-concat');
const babelify = require('babelify');
const browserify = require('browserify');
const less = require('gulp-less');

gulp.task("build", ["build-less", "copy-html"], function () {
    browserify("./src/app.js", {
        debug: true
    })
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest("dist"));
});

gulp.task("build-less", function () {
    return gulp.src("src/**/*.less")
        .pipe(less())
        .pipe(concat("app.css"))
        .pipe(gulp.dest('dist'));
});

gulp.task("copy-html", function () {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest('dist'));
});
