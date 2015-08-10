define([
		"./charts/doughnut",
		"./charts/line",
		"./sprintdata",
		"jquery"
		],function (doughnut, line, sprintdata, $) {
	return {
	    renderCharts: function () {
	    	//this.setGlobalChartJSConfig();
		var that = this;
		$.get( "http://trident.vm-intern.epages.com:3001/jiradata/sprinthistory", function( sprintHistoryData ) {
          $(".SprintName").text(sprintHistoryData[sprintHistoryData.length-1].sprintName);
		    	that.renderSprintHistoryChart(sprintHistoryData);
          that.renderTaskDistribution(sprintHistoryData);
          that.renderTypeDistribution(sprintHistoryData);
		});
	    },
		renderTaskDistribution : function (sprintHistoryData){
			doughnut.renderChart({
				canvasName: "taskDistribution",
			  data: sprintHistoryData[sprintHistoryData.length-1].topicDistribution,
				colorType: {
					base: 'blue',
					highcolor: 'orange'
				}
			});
		},
		renderTypeDistribution : function (sprintHistoryData){
			doughnut.renderChart({
				canvasName: "typeDistribution",
				data: sprintHistoryData[sprintHistoryData.length-1].typeDistribution,
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
