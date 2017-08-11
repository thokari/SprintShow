define([
	"./charts/doughnut",
	"./charts/line",
	"./jiratasks",
	"jquery"
	],function (doughnut, line, jiraTasks, $) {

		var getDoughnutStructureData = function() {
			return {
				datasets: [{
					data: []
				}],
				labels: []
			}
		};

		var renderTaskDistribution = function (){
	    	doughnut.renderChart({
	    		canvasName: "taskDistribution",
	    		data: sprintHistoryData[sprintHistoryData.length-1].topicDistribution,
	    		colorType: {
	    			base: 'blue',
	    			highcolor: 'orange'
	    		}
	    	});
	    };

	    var renderTypeDistribution = function (){
	    	doughnut.renderChart({
	    		canvasName: "typeDistribution",
	    		data: getTaskDistributionData(),
	    		colorType: {
	    			base: 'green',
	    			highcolor: 'red'
	    		}
	    	});
	    };

	    var renderSprintHistoryChart = function (){
	    	line.renderChart({
	    		canvasName: "history",
	    		data: sprintHistoryData
	    	});
	    };

	    var setGlobalChartJSConfig = function (){
	    	Chart.defaults.global = {
				//animation: false,
			};

		};

		var getTaskDistributionData = function() {
			var drawData = getDoughnutStructureData();



		};

		return {
			renderCharts: function () {
	    	//this.setGlobalChartJSConfig();

	    	var tasksCount = jiraTasks.length;
	    	var tasksTypeDistribution = {};
	    	var tasksPriorityDistribution = {};
	    	
            for(var i = 0; i < tasksCount ; i++) {
                tasksTypeDistribution[ jiraTasks[i].type ] = tasksTypeDistribution[ jiraTasks[i].type ] == undefined ? 1 : tasksTypeDistribution[ jiraTasks[i].type ] + 1;
                tasksPriorityDistribution[ jiraTasks[i].priority ] = tasksPriorityDistribution[ jiraTasks[i].priority ] == undefined ? 1 : tasksPriorityDistribution[ jiraTasks[i].priority ] + 1;
            }

            renderSprintHistoryChart();
            renderTaskDistribution();
            renderTypeDistribution();

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
	    }
	};
});
