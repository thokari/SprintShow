var bowerLibary = '../bower_components';
requirejs.config({
    baseUrl: 'lib',
    paths: {
        scripts: '../scripts',
    	sprintdata: 'scripts/sprintdata',
        charts: '../scripts/charts',
        chartJS: bowerLibary + '/Chart.js/Chart.min',
        randomcolor: bowerLibary + '/randomcolor/randomColor',
        revealJS: bowerLibary + '/reveal-js/js/reveal.min',
	jquery: bowerLibary + 'jquery/dist/jquery.min'
    }
});

requirejs(['scripts/main']);
