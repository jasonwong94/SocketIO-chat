var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

var numWatches = 0;

gulp.task('compile-sass', function(){
	gulp.src( './client/sass/client.scss')
		.pipe( sass().on('error', sass.logError))
		.pipe( gulp.dest('./client/'));
} );

gulp.task('default',function() {
    gulp.watch('./sass/*.scss',['compile-sass']);
});
