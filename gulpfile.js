const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss') // pegando arquivos fonte
        .pipe(sass({outputStyle: 'compressed'})) // os arquivos fonte saem comprimidos
        .pipe(gulp.dest('./dist/css')); // criação de pasta de destino css
}
exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}