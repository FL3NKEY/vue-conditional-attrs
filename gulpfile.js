const gulp = require('gulp');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const coffee = require('gulp-coffee');
const browserSync = require('browser-sync').create();

const isProduction = process.argv.indexOf('-p') !== -1;

const paths = {
	jsSrc: 'src/vue-conditional-attrs.coffee',
	demosSrc: 'demos/*.html',

	jsDist: 'vue-conditional-attrs.js',
	jsMinDist: 'vue-conditional-attrs.min.js',

	dist: 'dist',
	distSrc: 'dist/*.js'
}

gulp.task('js', () => {
	gulp.src(paths.jsSrc)
		.pipe(coffee({
			bare: false
		}))
		.pipe(babel())
		.pipe(rename(paths.jsDist))
		.pipe(gulp.dest(paths.dist))
});

gulp.task('jsMin', () => {
	gulp.src(paths.jsSrc)
		.pipe(coffee({
			bare: false
		}))
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename(paths.jsMinDist))
		.pipe(gulp.dest(paths.dist))
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: './',
			index: './demos/index.html'
		}
	});

	gulp.watch(paths.jsSrc, ['js']);
	gulp.watch(paths.distSrc).on('change', browserSync.reload);
	gulp.watch(paths.demosSrc).on('change', browserSync.reload);
});

if(!isProduction) {
	gulp.task('default', ['browser-sync', 'js']);
}
else {
	gulp.task('default', ['js', 'jsMin']);
}