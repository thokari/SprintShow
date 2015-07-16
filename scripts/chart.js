define([
		"./charts/doughnut",
		"./charts/line",
		"./sprintdata"
		],function (doughnut, line, sprintdata) {
	return {
	    renderCharts: function () {
	    	//this.setGlobalChartJSConfig();
	    	this.renderTaskDistribution();
	    	this.renderSprintHistoryChart();
	    },
		renderTaskDistribution : function (){
			doughnut.renderChart({
				canvasName: "taskDistribution",
				data: sprintdata.getCurrentSprint()
			});
		},
		renderSprintHistoryChart : function (){
			line.renderChart({
				canvasName: "history",
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
