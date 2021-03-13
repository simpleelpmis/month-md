/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp')
const ts = require('gulp-typescript')
const uglify = require('gulp-uglify')
const gulpRename = require('gulp-rename')
const tsProject = ts.createProject('tsconfig.json')

const paths = {
	source: './src',
	dist: './dist'
}

gulp.task('tsfile', function () {
	return tsProject.src()
		.pipe(tsProject()).js
		.pipe(gulp.dest(paths.dist))
})

gulp.task('tsfilemin', function () {
	return gulp.src(`${paths.dist}/index.js`)
		.pipe(uglify())
		.pipe(gulpRename('index.min.js'))
		.pipe(gulp.dest(`${paths.dist}/`))
})

gulp.task('watch', function () {
	gulp.watch(`${paths.source}/index.tsx`, gulp.series('tsfile'))
})

gulp.task('default', gulp.series('tsfile', 'tsfilemin'))