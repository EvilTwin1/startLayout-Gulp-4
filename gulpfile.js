const 	gulp 		  = require('gulp');
const	imagemin 	  = require('gulp-imagemin');
const	concat        = require('gulp-concat');
const	sourcemaps    = require('gulp-sourcemaps');
const	sass          = require('gulp-sass');
const	autoprefixer  = require('gulp-autoprefixer');
const	cleanCSS      = require('gulp-clean-css');
const	uglify        = require('gulp-uglify');
const	rename        = require('gulp-rename');
const   browserSync   = require('browser-sync').create();



function styles(){
	return gulp.src('app/scss/*.*')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 2 versions'],
		cascade: false
	}))
	.pipe(cleanCSS({
		level: 2
	}))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(sourcemaps.write('/'))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
}

function libsJs() {
	return gulp.src([
		'app/libs/jquery/jquery.min.js'
		])
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('app/js/'))
	
}

function mainJs() {
	return gulp.src([
		'app/js/main.js'
		])
	.pipe(gulp.dest('app/js'))
	
}

function scripts(){
	return gulp.src([
		'app/js/libs.js',
		'app/js/main.js'
		])
	.pipe(concat('script.js'))
	.pipe(uglify({
		toplevel: true
	}))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
}

function replaceHtml() {
	return gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))
}

function replaceLibs() {
	return gulp.src('app/libs/**/*.*')
		.pipe(gulp.dest('dist/libs'))
}

function replaceImagemin() {
	return gulp.src('app/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
}

function replaceFonts() {
	return gulp.src('app/webfonts/**/*')
		.pipe(gulp.dest('dist/webfonts'))
}

function replaceStyles() {
	return gulp.src('app/css/*.*')
	.pipe(gulp.dest('dist/css'));
}

function replaceScripts(){
	return gulp.src('app/js/script.min.js')
	.pipe(gulp.dest('dist/js'))
}

function watch(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
	gulp.watch('app/scss/**/*.scss', styles);
	gulp.watch(['app/js/**/main.js','app/js/**/libs.js'], gulp.series(scripts));
	gulp.watch("app/*.html").on('change', browserSync.reload);
}
gulp.task('default', watch);

gulp.task('build', gulp.series(gulp.parallel(styles,libsJs,mainJs,scripts),libsJs,mainJs,scripts, replaceHtml, replaceLibs, replaceImagemin, replaceFonts, replaceStyles, replaceScripts));
