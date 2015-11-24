var gulp = require('gulp'),
    gutil = require('gulp-util'),
     concat = require('gulp-concat'),
    less = require('gulp-less'),
     path  = require('path'),
    webserver = require('gulp-webserver');



  gulp.task('less', function(){
    gulp.src('./bower_components/bootstrap/less/bootstrap.less')
      .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(less())
      .pipe(gulp.dest('public/css'))
    // console.log('works less');
  });

  // gulp.task('scripts', function(){
    // console.log('js works');
    //gulp.src([''])
  // .pipe(concat('main.js'))
  // .pipe(gulp.dest('public/js'))
  // });

 gulp.task('html', function(){
      gulp.src('public/index.html')
  });

gulp.task('watch', function(){
  gulp.watch('./bower_components/bootstrap/less/*.less', ['less']);
  // gulp.watch('builds/app/js/**/*.js', ['scripts']);
  gulp.watch(['public/index.html','public/index.html'], ['html']);
});


  gulp.task('webserver', function(){
    gulp.src('public/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
  });


  gulp.task('default', ['watch', 'less', 'html', 'webserver' ]);