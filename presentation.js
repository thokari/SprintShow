var bowerLibary = '../bower_components';
requirejs.config({
    baseUrl: 'lib',
    paths: {
        scripts: '../scripts',
        charts: '../scripts/charts',
        chartJS: bowerLibary + '/Chart.js/Chart',
    }
});

requirejs(['scripts/main']);