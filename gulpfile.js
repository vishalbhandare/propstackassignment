var gulp = require('gulp');

gulp.task("copyfiles", function() {


  gulp.src("vendor/bower_dl/d3/d3.js")
    .pipe(gulp.dest("public/js/"));

});
