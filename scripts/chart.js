define([
		"./charts/doughnut",
		"./sprintdata"
		],function (doughnut , sprintdata) {
	return {
	    renderCharts: function () {
			var lastSprints = {
				canvasName: "myChart",
				data: sprintdata.getCurrentSprint()
			};
	    	this.renderDoughnutChart(lastSprints);
	    },
		renderDoughnutChart : function (chartData){
			doughnut.setCanvasName(chartData.canvasName).renderChart(chartData);
		}
	};
});
