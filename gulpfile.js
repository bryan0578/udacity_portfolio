var gulp = require('gulp'),
	browserSync = require('browser-sync');

//Development server to watch and update all HTML, CSS, images and js files
gulp.task('browser-sync', function () {
   var files = [
      'development/**/*.html',
      'development/css/**/*.css',
      'development/images/**/*.png',
      'development/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './development'
      }
   });
});

gulp.task('default', function() {
  // place code for your default task here
});