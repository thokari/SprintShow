define([
		"./charts/doughnut",
		"./charts/line",
		"./sprintdata"
		],function (doughnut, line, sprintdata) {
	return {
	    renderCharts: function () {
	    	//this.setGlobalChartJSConfig();
	    	this.renderTaskDistribution();
		this.renderTypeDistribution();
	    	this.renderSprintHistoryChart();
	    },
		renderTaskDistribution : function (){
			doughnut.renderChart({
				canvasName: "taskDistribution",
				data: sprintdata.getCurrentSprint(),
				colorType: {
					base: 'blue',
					highcolor: 'orange'
				}
			});
		},
		renderTypeDistribution : function (){
			doughnut.renderChart({
				canvasName: "typeDistribution",
				data: sprintdata.getCurrentSprintTypes(),
				colorType: {
					base: 'green',
					highcolor: 'red'
				}
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
