const gulp = require("gulp");
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");
const purgecss = require("gulp-purgecss");

gulp.task("compress", function() {
  gulp
    .src("js_orig/*.js")
    .pipe(minify())
    .pipe(gulp.dest("js"));
});

gulp.task("minify-css", () => {
  return gulp
    .src("css/purged/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("css"));
});

gulp.task("purgecss", () => {
  return gulp
    .src("css/orig/*.css")
    .pipe(
      purgecss({
        content: ["index.html"]
      })
    )
    .pipe(gulp.dest("css/purged"));
});
