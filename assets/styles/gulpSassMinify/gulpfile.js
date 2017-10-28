'use strict';   //javascript word uitgevoerd in strict modus.  //ongedeclareerde variabelen mogen niet toegepast worden.

const gulp = require('gulp');
const gulp_sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

// gulp.task('sass', function() {
// 	console.log('TASK: transpile sass to css...');
// 	return gulp.src('../scss/**/*.scss') //hiermee spreek je alle files in de directory sass en subdirecotries met .scss aan		
// 	  .pipe(gulp_sass().on('error', gulp_sass.logError)) //error log
// 	  .pipe(gulp.dest('../'));
// });

//only compiling the main.scss file




gulp.task('sass', function() {
	console.log('TASK: transpile sass to css...');
	return gulp.src('../scss/main.scss') //hiermee spreek je alle files in de directory sass en subdirecotries met .scss aan		
	  .pipe(gulp_sass().on('error', gulp_sass.logError)) //error log
	  .pipe(gulp.dest('../'));
});


gulp.task('minify-css', () => {
	console.log('TASK: minify the main.css file');
  return gulp.src('../*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('../'));
});


gulp.task('sass-watch', () => {
	return gulp.watch('../scss/**/*.scss', ['sass' ]);  //als er een bronbestand veranderd in een sass bestand dan voert hij gulp sass uit  

});

gulp.task('minify-watch', () => {
	return gulp.watch('../*.css', ['minify-css' ]);  //als er een bronbestand veranderd in een sass bestand dan voert hij gulp sass uit  

});
