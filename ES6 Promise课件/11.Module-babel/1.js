/**
 * Created by Weil on 16/3/24.
 */

const gulp = require('gulp');
const watchify = require('watchify');
const plugins = require('gulp-load-plugins')();
const babel = require('gulp-babel');
const sass = require('gulp-ruby-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const fs = require('fs');

const monitorPath = './xm-mtinfo/webroot/monitor';

gulp.task('dev-styles', ()=> {
    gulp.watch(`${monitorPath}/css/sass/*.scss`, ()=> {
        return sass(`${monitorPath}/css/sass/*.scss`)
            .on('error', sass.logError)
            .pipe(gulp.dest(`${monitorPath}/css`))
            .pipe(plugins.notify({message: 'dev-styles task complete'}));
    });
});

//monitor-appeal
function submitBundle() {
    return submitB.bundle()
        .on('error', plugins.util.log.bind(plugins.util, 'Browserify Error'))
        .pipe(source('submit.js'))
        .pipe(buffer())
        .pipe(gulp.dest(`${monitorPath}/dest`))
        .pipe(plugins.notify({message: 'dev scripts task complete'}));
}

var submitBrows = browserify({
    entries: [],
    debug: true
}).transform("babelify", {presets: ["es2015", "stage-0"]})
    .require(`${monitorPath}/js/app/view/submit.js`, {expose: 'app'});
var submitB = watchify(submitBrows);
gulp.task('dev-submit', submitBundle);
submitB.on('update', submitBundle);

//monitor-appeal
function appealBundle() {
    return appealB.bundle()
        .on('error', plugins.util.log.bind(plugins.util, 'Browserify Error'))
        .pipe(source('appeal.js'))
        .pipe(buffer())
        .pipe(gulp.dest(`${monitorPath}/dest`))
        .pipe(plugins.notify({message: 'dev scripts task complete'}));
}

var appealBrows = browserify({
    entries: [],
    debug: true
}).transform("babelify", {presets: ["es2015", "stage-0"]})
    .require(`${monitorPath}/js/app/view/appeal.js`, {expose: 'app'});
var appealB = watchify(appealBrows);
gulp.task('dev-appeal', appealBundle);
appealB.on('update', appealBundle);

//monitor-appealList
function listBundle() {
    return listB.bundle()
        .on('error', plugins.util.log.bind(plugins.util, 'Browserify Error'))
        .pipe(source('appealList.js'))
        .pipe(buffer())
        .pipe(gulp.dest(`${monitorPath}/dest`))
        .pipe(plugins.notify({message: 'dev scripts task complete'}));
}

var listBrows = browserify({
    entries: [],
    debug: true
}).transform("babelify", {presets: ["es2015", "stage-0"]})
    .require(`${monitorPath}/js/app/view/appealList.js`, {expose: 'app'});
var listB = watchify(listBrows);
gulp.task('dev-list', listBundle);
listB.on('update', listBundle);

gulp.task('default', ['dev-styles', 'dev-submit', 'dev-appeal', 'dev-list']);