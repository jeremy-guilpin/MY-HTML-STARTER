// install des packages
// npm install

// Requis
var gulp = require('gulp');
var extender = require('gulp-html-extend');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './_src'; // dossier de travail
var destination = './'; // dossier à livrer

// Les tâches

// CSS = SASS + autoprefixer + minify
gulp.task('css', function() {
	return gulp.src(source + '/css/sass/styles.scss')
		.pipe(plugins.sass())
		.pipe(plugins.csscomb())
		.pipe(plugins.cssbeautify({ indent: '	' }))
		.pipe(plugins.autoprefixer())
		.pipe(gulp.dest(destination + '/css/'));
});
gulp.task('minify-css', function() {
	return gulp.src(destination + '/css/*.css')
		.pipe(plugins.csso())
		.pipe(plugins.rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(destination + '/css/'));
});

// JS = uglify + concat
gulp.task('js', function() {
	return gulp.src([
		source + '/js/jquery/*.js', 
		source + '/js/utils/*.js', 
		source + '/js/vendor/*.js', 
		source + '/js/main.js',
	]).pipe(plugins.uglify())
	.pipe(plugins.concat('global.min.js'))
	.pipe(gulp.dest(destination + '/js/'));
});

// Tâche "img" = Images optimisées
gulp.task('img', function() {
	return gulp.src(source + '/img/*.{png,jpg,jpeg,gif,svg}')
		.pipe(plugins.imagemin())
		.pipe(gulp.dest(destination + '/img'));
});

// Tâche "build" command => gulp dev
gulp.task('dev', ['css']);

// Tâche "prod" = toutes les tâches ensemble command => gulp prod
gulp.task('prod', ['dev', 'minify-css', 'js', 'img']);

// Tâche "watch" = je surveille *scss command => gulp watch
gulp.task('watch', function() {
	gulp.watch(source + '/css/sass/styles.scss', ['css']);
});
