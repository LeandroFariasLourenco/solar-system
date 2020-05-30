const DEV = "./src";
const PROD = "./build";
const PROJECT = "solar";

const VIEWSBUILD = `${PROD}/html`;
const JSBUILD = `${PROD}/js`
const SCSSBUILD = `${PROD}/css`

const SCSSDEV = `${DEV}/assets/scss/${PROJECT}-index.scss`;
const JSDEV = `${DEV}/assets/js/${PROJECT}-index.js`;
const PUGDEV = `${DEV}/views/${PROJECT}-index.pug`;


const gulp     = require("gulp"),
  scss         = require("gulp-sass"),
  browserSync  = require("browser-sync").create(),
  minify       = require("gulp-minify"),
  rollup       = require("gulp-better-rollup"),
  babel        = require("rollup-plugin-babel"),
  resolve      = require("rollup-plugin-node-resolve"),
  commonjs     = require("rollup-plugin-commonjs"),
  concat       = require("gulp-concat"),
  pug          = require("gulp-pug"),
  clean        = require("gulp-clean"),
  ghpages      = require("gulp-gh-pages");


gulp.task("scss" , _ => (
  gulp.src(SCSSDEV)
  .pipe(scss())
  .pipe(gulp.dest(SCSSBUILD))
  .pipe(browserSync.reload({
    stream: true
  }))
))

gulp.task("js" , _ => (
  gulp.src(JSDEV)
  .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
  .pipe(gulp.dest(JSBUILD))
  .pipe(browserSync.reload({
    stream: true
  }))
))

gulp.task("pug" , _ => (
  gulp.src(PUGDEV)
  .pipe(pug({
    doctype: "html",
    pretty: 0
  }))
  .pipe(gulp.dest(VIEWSBUILD))
  .pipe(browserSync.reload({
    stream: true
  }))
))

gulp.task("browser" , _ => (
  browserSync.init({
    server: {
      baseDir : `${PROD}`,
      index: `./html/${PROJECT}-index.html`
    }
  })
))

gulp.task("watch" , _ => {
  gulp.watch(`${DEV}/**/*.scss` , gulp.series("scss"))
  gulp.watch(`${DEV}/**/*.js` , gulp.series("js"))
  gulp.watch(`${DEV}/**/*.pug` , gulp.series("pug"))
})

gulp.task("remove" , _ => (
  gulp.src(`${PROD}` , {
    allowEmpty: !0
  })
  .pipe(clean())
))

gulp.task("utils" , _ => (
  gulp.src(`${DEV}/common/js/utils/**`)
  .pipe(gulp.dest(`${JSBUILD}`))
))

gulp.task("deploy" , _ => (
  gulp.src(`${PROD}/**`)
  .pipe(ghpages({
    remoteUrl: `https://github.com/LeandroFariasLourenco/${PROJECT}/`,
    branch: "master"
  }))
))

gulp.task("default" , gulp.series("remove" , "utils" , "pug" , "scss" , "js"))
gulp.task("dev" , gulp.parallel("default" , "watch" , "browser"))