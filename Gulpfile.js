var gulp       = require('gulp');
var clean      = require('gulp-clean');
var minifycss  = require('gulp-minify-css');
var requirejs  = require('gulp-requirejs');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');

var paths = {
	requireJSIncludes: ['../bower_components/requirejs/require.js'],
	assets: ['./app/img/**/*.*'],
	js: './app/js',
	jsmain: 'main.js',
	css: './app/sass',
	cssmain: 'main.scss',
	app: './app',
	dist: './dist'
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
		mainConfigFile: paths.js + "/" + paths.jsmain,
		out: paths.jsmain,
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
	return gulp.src(paths.css + "/" + paths.cssmain)
		.pipe(sass())
		.pipe(minifycss())
		.pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['clean'], function() {
	gulp.start('copy-assets', 'compile-js', 'compile-css');
});
