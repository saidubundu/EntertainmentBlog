const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false
    });

mix.styles([

    'resources/css/fontawesome-all.min.css',
    'resources/css/iconfont.css',
    'resources/css/vendor/bootstrap.min.css',
    'resources/css/vendor/owl.carousel.min.css',
    'resources/css/vendor/magnific-popup.css',
    'resources/css/vendor/animate.css',
    'resources/css/style.css',
], './public/css/front.css');

mix.scripts([

    'resources/js/js/vendor/jquery.min.js',
    'resources/js/js/vendor/jquery-migrate.min.js',
    'resources/js/js/vendor/easing-1.3.js',
    'resources/js/js/vendor/jquery.waypoints.min.js',
    'resources/js/js/vendor/owl.carousel.min.js',
    'resources/js/js/vendor/slick.min.js',
    'resources/js/js/vendor/bootstrap.bundle.min.js',
    'resources/js/js/vendor/isotope.pkgd.min.js',
    'resources/js/js/vendor/jquery.counterup.js',
    'resources/js/js/vendor/jquery.magnific-popup.min.js',
    'resources/js/js/vendor/jquery.nicescroll.min.js',
    'resources/js/js/plugins.js',
    'resources/js/js/main.js',

], './public/js/front.js' );
