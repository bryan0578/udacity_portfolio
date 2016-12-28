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
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache');

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'development'
    }
  })
})

// HTML
gulp.task('html', function() {
	gulp.src('development/*.html')
	.pipe(gulp.dest('dist/'))
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
  gulp.watch('development/*.html', browserSync.reload);
	gulp.watch('development/css/*.css', browserSync.reload);
	gulp.watch('development/images/**/*.+(png|jpg|jpeg|gif|svg)');
});

gulp.task('default', ['watch', 'html', 'images', 'browserSync']);



