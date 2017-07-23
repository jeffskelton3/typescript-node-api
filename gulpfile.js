const gulp = require('gulp');
const shell = require('gulp-shell');
const tsc = require('gulp-typescript');
const tsConfig = require('./tsconfig.json');

gulp.task('typescript', () => {    
    return gulp.src('./src/**/*.ts')
                .pipe(tsc({
                    target: 'es6',
                    module: 'commonjs',
                    sourceMap: false,
                    noImplicitAny: false
                }))
                .pipe(gulp.dest('./dist'))
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.ts', ['typescript', 'server'])
});

gulp.task('server', () => {
    return shell('node ./dist/index.js');
});

gulp.task('default', ['typescript', 'server']);