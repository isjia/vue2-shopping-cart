var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching css/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
