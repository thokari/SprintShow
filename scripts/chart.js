define([
	"./charts/doughnut",
	"./charts/line",
	"./jiratasks",
	"jquery"
	],function (doughnut, line, jiratasks, $) {
		return {
			renderCharts: function () {
	    	//this.setGlobalChartJSConfig();
	    	
            for(var i = 0; i < jiraTasks.length ; i++) {
                $(".sprint_goals").append("<li>" + jiraTasks[i].summary + "[<a href='https://epages.atlassian.net/browse/" + jiraTasks[i].id + "'>" + jiraTasks[i].id + "</a>]" + "</li>");
            }

            this.renderSprintHistoryChart(sprintHistoryData);
            this.renderTaskDistribution(sprintHistoryData);
            this.renderTypeDistribution(sprintHistoryData);

//	    	$.get( "http://trident.vm-intern.epages.com:3001/jiradata/sprinthistory", function( sprintHistoryData ) {
//	    		$(".SprintName").text(sprintHistoryData[sprintHistoryData.length-1].sprintName);
//	    		var sprintGoals = sprintHistoryData[sprintHistoryData.length-1].sprintGoals;
//	    		var num_sprints = sprintGoals == undefined ? 0 : sprintGoals.length;
//	    		for(var i=0; i<num_sprints; i++) {
//	    			$(".sprint_goals").append("<li>" + sprintGoals[i].summary + "[<a href='https://epages.atlassian.net/browse/" + sprintGoals[i].key + "'>" + sprintGoals[i].key + "</a>]" + "</li>");
//	    		}
//
//	    		that.renderSprintHistoryChart(sprintHistoryData);
//	    		that.renderTaskDistribution(sprintHistoryData);
//	    		that.renderTypeDistribution(sprintHistoryData);
//	    	});
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
