define([
		"./charts/doughnut",
		"./charts/line",
		"./sprintdata",
		"./jquery"
		],function (doughnut, line, sprintdata, jquery) {
	return {
	    renderCharts: function () {
	    	//this.setGlobalChartJSConfig();
	    	this.renderTaskDistribution();
		this.renderTypeDistribution();
		jquery.get( "http://localhost:3001/jiradata/sprinthistory", function( sprintHistoryData ) {
		    	this.renderSprintHistoryChart(sprintHistoryData);
		});
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
		renderSprintHistoryChart : function (sprintHistoryData){
			line.renderChart({
				canvasName: "history",
				data: sprintHistoryData
			});
		},
		setGlobalChartJSConfig : function (){
			Chart.defaults.global = {
				//animation: false,
			};

		}

	};
});
