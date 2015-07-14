var bowerLibary = '../bower_components';
requirejs.config({
    baseUrl: 'lib',
    paths: {
        scripts: '../scripts',
    	sprintdata: 'scripts/sprintdata',
        charts: '../scripts/charts',
        chartJS: bowerLibary + '/Chart.js/Chart',
        randomcolor: bowerLibary + '/randomcolor/randomColor'
    }
});

requirejs(['scripts/main']);