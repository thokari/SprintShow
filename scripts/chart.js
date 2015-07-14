define([
		"./charts/doughnut",
		"./sprintdata"
		],function (doughnut , sprintdata) {
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
	    },
		renderDoughnutChart : function (chartData){
			doughnut.setCanvasName(chartData.canvasName).renderChart(chartData);
		}
	};
});
