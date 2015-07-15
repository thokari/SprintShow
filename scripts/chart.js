define([
		"./charts/doughnut",
		"./charts/line",
		"./sprintdata"
		],function (doughnut, line, sprintdata) {
	return {
	    renderCharts: function () {
	    	//this.setGlobalChartJSConfig();
	    	this.renderCurrentSprint();
	    	this.renderSprintHistoryChart();
	    },
		renderCurrentSprint : function (){
			doughnut.renderChart({
				canvasName: "currentSprint",
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
