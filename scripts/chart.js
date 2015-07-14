define([
		"./charts/doughnut",
		"./charts/line",
		"./sprintdata"
		],function (doughnut, line, sprintdata) {
	return {
	    renderCharts: function () {
			var lastSprint = {
				canvasName: "myChart",
				data: sprintdata.getCurrentSprint()
			};
	    	this.renderDoughnutChart(lastSprint);
	    	var stupidSprint = {
				canvasName: "smallChart",
				data: sprintdata.getCurrentSprint()
			};
	    	this.renderDoughnutChart(stupidSprint);
	    	var sprintHistory = {
				canvasName: "lineChart",
				data: sprintdata.getCurrentSprint()
			};
	    	this.renderLineChart(sprintHistory);
	    },
		renderDoughnutChart : function (chartData){
			doughnut.renderChart(chartData);
		},
		renderLineChart : function (chartData){
			line.renderChart(chartData);
		}
	};
});
