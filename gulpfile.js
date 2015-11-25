var gulp = require('gulp'),
    gutil = require('gulp-util'),
     concat = require('gulp-concat'),
    less = require('gulp-less'),
     path  = require('path'),
    webserver = require('gulp-webserver');


    gulp.task('less', function(){
    gulp.src('less/*.less')
      .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(less())
      .pipe(gulp.dest('public/css'))

  });


  gulp.task('bootstrap', function(){
    gulp.src(['./bower_components/bootstrap/js/transition.js',
          './bower_components/bootstrap/js/alert.js',
          './bower_components/bootstrap/js/button.js',
          './bower_components/bootstrap/js/carousel.js',
          './bower_components/bootstrap/js/collapse.js',
          './bower_components/bootstrap/js/dropdown.js',
          './bower_components/bootstrap/js/modal.js',
          './bower_components/bootstrap/js/tooltip.js',
          './bower_components/bootstrap/js/popover.js',
          './bower_components/bootstrap/js/scrollspy.js',
          './bower_components/bootstrap/js/tab.js',
          './bower_components/bootstrap/js/affix.js'])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('public/js'))
  });



gulp.task('scripts', function() {
  gulp.src([
          './bower_components/jquery/dist/jquery.js'])
  .pipe(concat('jquery.js'))
  .pipe(gulp.dest('public/js'))

});


gulp.task('extra', function() {
  gulp.src(['libs/holder.min.js', 'ie-emulation-modes-warning.js', 'ie10-viewport-bug-workaround.js'])
  .pipe(concat('extra.js'))
  .pipe(gulp.dest('public/js'))

});


 gulp.task('html', function(){
      gulp.src('public/index.html')
  });

gulp.task('watch', function(){
  gulp.watch('less/*.less', ['less']);
  gulp.watch('./bower_components/bootstrap/js/*.js', ['bootstrap']);
  gulp.watch('./bower_components/jquery/dist/*.js', ['scripts']);
  gulp.watch('libs/*.js', ['extra']);
  gulp.watch(['public/index.html','public/index.html'], ['html']);
});


  gulp.task('webserver', function(){
    gulp.src('public/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
  });


  gulp.task('default', ['watch', 'less', 'scripts', 'bootstrap','extra', 'html', 'webserver' ]);