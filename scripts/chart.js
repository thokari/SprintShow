define([
		"./charts/doughnut",
		"./charts/line",
		"./sprintdata"
		],function (doughnut, line, sprintdata) {
	return {
	    renderCharts: function () {
	    	//this.setGlobalChartJSConfig();
	    	this.renderCurrentSprint();
	    	this.renderSmallCurrentSprint();
	    	this.renderSprintHistoryChart();
	    },
		renderCurrentSprint : function (){
			doughnut.renderChart({
				canvasName: "myChart",
				data: sprintdata.getCurrentSprint()
			});
		},
		renderSmallCurrentSprint : function (){
			doughnut.renderChart({
				canvasName: "smallChart",
				data: sprintdata.getCurrentSprint()
			});
		},
		renderSprintHistoryChart : function (){
			line.renderChart({
				canvasName: "lineChart",
				data: sprintdata.getSprintHistory()
			});
		},
		setGlobalChartJSConfig : function (){
			Chart.defaults.global = {
				//animation: false,
			};

		}

	};
});
