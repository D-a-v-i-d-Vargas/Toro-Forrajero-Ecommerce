import { src, dest, watch, series } from 'gulp';
import postcss from 'gulp-postcss';
import postcssImport from 'postcss-import';
import cssnano from 'cssnano';

// TAREA CSS
export function css() {
    return src('src/css/app.css', { sourcemaps: true })
        .pipe(postcss([
            postcssImport(),
            cssnano()
        ]))
        .on('error', function (err) {
            console.error('Error en CSS:', err.toString());
            this.emit('end'); // Evita que la tarea se quede colgada
        })
        .pipe(dest('build/css', { sourcemaps: '.' }));
}

// TAREA JS
export function js() {
    return src(['src/js/app.js', 'src/js/pages/**/*.js'])
        .pipe(dest('build/js'));
}

// TAREA DEV (Watchers)
export function dev() {
    watch('src/css/**/*.css', css);
    watch('src/js/**/*.js', js);
}

export default series(js, css, dev);