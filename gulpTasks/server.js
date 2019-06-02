const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
gulp.task('watch', () => {
     watch('app/**/*.html', () => gulp.start('app.html'))
     watch('app/**/*.css', () => gulp.start('app.css'))
     watch('app/**/*.js', () => gulp.start('app.js'))
     watch('assets/**/*.*', () => gulp.start('app.assets'))
    //watch('app/**/*.html', () => gulp.start('app.html'))
    //watch('app/**/*.css', () => gulp.start('app.css'))
    //watch('app/**/*.js', () => gulp.start('app.js'))
    //watch('assets/**/*.*', () => gulp.start('app.assets'))
})
gulp.task('server', ['watch'], () =>
    /* gulp.src('public').pipe(webserver({ */
     gulp.src('public').pipe(webserver({
        livereload: true,
        port: 3000,
        /* port: 3003, */
        open:true
    }))
)
