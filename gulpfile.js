/*
* Install Gulp, Sass, NPM, and Ruby globally
* Update or create package.json in project dir. Open terminal in the project directory and run:
		npm init
* Install Gulp in Project run:
		npm install --save-dev gulp
* Install required plugins:
		npm install gulp-ruby-sass, gulp-autoprefixer, gulp-minify-css, gulp-concat, gulp-uglify, gulp-imagemin, gulp-notify, gulp-rename, gulp-livereload, gulp-cache del --save-dev
* Run: gulp watch to watch for changes
* Enable Live Reload in browser: http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions
*/

// Load plugins
var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del');




