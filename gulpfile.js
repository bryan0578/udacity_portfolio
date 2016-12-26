/*
Gulp Workflow
* Make sure Node is installed or install Node
* Run npm init to create pakage.json
* Install Gulp npm install --save-dev gulp
* Install plugins for workflow
* browser-sync, gulp-sass, cssnano
*/
// Install gulp plugins
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	cssnano = require('cssnano'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache');

// HTML
gulp.task('html', function() {
	gulp.src('development/*.html')
	.pipe(gulp.dest('dist/'))
});
// Compile Sass into CSS
gulp.task('sass', function() {
	gulp.src('development/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('development/css'))
});

// optimize css and send it to production
gulp.task('css', function() {
    gulp.src('development/css/**/*.css')
    .pipe(postcss([
        precss(),
        autoprefixer(),
        cssnano()
    ]))
    .pipe(gulp.dest('dist/css'))
});
 
// Optimize Images
gulp.task('images', function() {
  gulp.src('development/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      	progressive: true, optimizationlevel: 7
      })))
    .pipe(gulp.dest('dist/images'))
});

// Watch Files for changes
gulp.task('watch', function() {
	gulp.watch('development/**/*.html')
	gulp.watch('development/scss/**/*.scss')
	gulp.watch('development/css/**/*.css')
	gulp.watch('development/images/**/*.+(png|jpg|jpeg|gif|svg)')
});

// Development server to watch and update all HTML, CSS, images and js files
gulp.task('browser-sync', function () {
   var files = [
      'development/**/*.html',
      'development/css/**/*.css',
      'development/images/**/*.+(png|jpg|jpeg|gif|svg)',
      'development/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './development'
      }
   });
});

gulp.task('default', ['watch', 'html', 'sass', 'css', 'images']);



