var gulp       = require('gulp');
var clean      = require('gulp-clean');
var less       = require('gulp-less');
var minifycss  = require('gulp-minify-css');
var requirejs  = require('gulp-requirejs');
var uglify     = require('gulp-uglify');

var paths = {
	requireJSIncludes: ['../bower_components/requirejs/require.js'],
	assets: [
		'./app/img/**/*.*'
	],
	app: './app',
	dist: './dist',
	js: './app/js',
	css: './app/less'
};

gulp.task('clean', function() {
	return gulp.src(paths.dist, {read: false})
		.pipe(clean());
});

gulp.task('copy-assets', function() {
	return gulp.src(paths.assets, {base: paths.app})
		.pipe(gulp.dest(paths.dist));
});

gulp.task('compile-js', function() {
	requirejs({
		baseUrl: paths.js,
		mainConfigFile: paths.js + "/main.js",
		out: 'main.js',
		name: 'main',
		findNestedDependencies: true,
		waitSeconds: 10,
		wrapShim: true,
		wrap: true,
		include: paths.requireJSIncludes
	})
		.pipe(uglify())
		.pipe(gulp.dest(paths.dist));
});

gulp.task('compile-css', function() {
	return gulp.src(paths.css + "/main.less")
		.pipe(less())
		.pipe(minifycss())
		.pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['clean'], function() {
	gulp.start('copy-assets', 'compile-js', 'compile-css');
});
