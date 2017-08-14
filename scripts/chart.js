define([
	"./jiratasks",
	"chartJS",
	"randomColor",
	], function (jiraTasks, Chart, randomColor) {

		var tasksCount = 0;
		var tasksTypeDistribution = {};
		var tasksPriorityDistribution = {};

		var getDoughnutStructureData = function() {
			return {
				datasets: [{
					data: [],
					backgroundColor: [],
					borderColor: [],
					borderWidth: 1
				}],
				labels: []
			}
		};

		var renderTaskDistribution = function () {
			var myDoughnutChart = new Chart(ctx, {
				type: 'doughnut',
				data: data,
				options: options
			});
		};

		var getRenderTypeDistributionData = function () {
			var taskDistributionData = getTaskDistributionData();
			return {
				canvasName: "typeDistribution",
				data: taskDistributionData,
			};
		};

		var renderSprintHistoryChart = function (){
			var taskDistributionData = getTaskDistributionData();
			line.renderChart({
				canvasName: "history",
				data: taskDistributionData
			});
		};

		var setGlobalChartJSConfig = function (){
			Chart.defaults.global = {
				//animation: false,
			};

		};

		var getTaskDistributionData = function () {
			var doughnutData = getDoughnutStructureData();

			for (var label in tasksTypeDistribution ) {
				if (tasksTypeDistribution.hasOwnProperty(label)) {
					doughnutData.labels.push(label);
					var distributionPercentage = calculateTaskPercentage(tasksTypeDistribution[label]);
					doughnutData.datasets[0].data.push(distributionPercentage);
					doughnutData.datasets[0].backgroundColor.push(randomColor());
					doughnutData.datasets[0].borderColor.push(randomColor());
				}
			}
			return doughnutData;
		};

		var calculateTaskPercentage = function (distributionCount) {
			return Math.floor(distributionCount * 100 / tasksCount);
		}

		return function () {
	    	//this.setGlobalChartJSConfig();

	    	tasksCount = jiraTasks.length;
	    	
	    	for (var i = 0; i < tasksCount ; i++) {
	    		tasksTypeDistribution[ jiraTasks[i].type ] = tasksTypeDistribution[ jiraTasks[i].type ] == undefined ? 1 : tasksTypeDistribution[ jiraTasks[i].type ] + 1;
	    		tasksPriorityDistribution[ jiraTasks[i].priority ] = tasksPriorityDistribution[ jiraTasks[i].priority ] == undefined ? 1 : tasksPriorityDistribution[ jiraTasks[i].priority ] + 1;
	    	}

            //renderSprintHistoryChart();
            //renderTaskDistribution();            
            var ctx = document.getElementById("typeDistribution");
            var renderData = getRenderTypeDistributionData();
            console.log(renderData.data);

            var myDoughnutChart = new Chart(ctx, {
            	type: 'doughnut',
				data: renderData.data,
				options: {
					scales: {
						yAxes: [{
							ticks: {beginAtZero:true}
						}]
					}
				}
			});

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
		}();
});
