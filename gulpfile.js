const gulp = require('gulp');
const less = require('gulp-less');
// TODO: TEST
gulp.task('less', function() {
    return gulp.src('less/app.less')
    .pipe(less())
    .pipe(gulp.dest('src'))
})
gulp.task('watch', function(done){
    gulp.watch('less/*.less', gulp.series('less'));
    done();
});