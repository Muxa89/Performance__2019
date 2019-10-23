const gulp = require("gulp");
const minify = require("gulp-minify");

gulp.task("compress", function() {
  gulp
    .src("js_orig/*.js")
    .pipe(minify())
    .pipe(gulp.dest("js"));
});
