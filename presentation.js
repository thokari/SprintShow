var bowerLibrary = '../bower_components';
requirejs.config({
    baseUrl: 'lib',
    paths: {
        scripts: '../scripts',
        charts: '../scripts/charts',
        chartJS: bowerLibrary + '/Chart.js/dist/Chart',
        randomColor: bowerLibrary + '/randomcolor/randomColor',
        revealJS: bowerLibrary + '/reveal-js/js/reveal.min',
	jquery: bowerLibrary + '/jquery/dist/jquery.min'
    }
});

requirejs(['scripts/main']);
