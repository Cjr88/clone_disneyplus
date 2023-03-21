const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles(){
    return gulp.src('./src/styles/*.scss') // pegando arquivos fonte
        .pipe(sass({outputStyle: 'compressed'})) // os arquivos fonte saem comprimidos
        .pipe(gulp.dest('./dist/css')); // criação de pasta de destino css
}
function images(){
    return gulp.src('./src/images/**/*') 
        .pipe(imagemin()) 
        .pipe(gulp.dest('./dist/images')); 
}
exports.default = gulp.parallel(styles, images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}