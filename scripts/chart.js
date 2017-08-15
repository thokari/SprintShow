define([
	"./jiratasks",
	"chartJS",
	"randomColor",
	], function (jiraTasks, Chart, randomColor) {

		var tasksCount = 0;
		var tasksTypeDistribution = {};
		var tasksPriorityDistribution = {};
		var tasksPlatformDistribution = {};
		var charts = {};
		var prettyColors = ["#0072BB","#FF4C3B","#FFD034","#000000","#C6C8CA","#7B8D8E","#32B92D","#FF6EB0","#FFCB00","#93228D","#B84B9E","#F20075","#006495","#004C70","#0093D1","#F2635F","#F4D00C","#E0A025","#462066","#FFB85F","#FF7A5A","#00AAA0","#8ED2C9","#FCF4D9","#44B3C2","#F1A94E","#E45641","#5D4C46","#7B8D8E","#F2EDD8"];

		var getDoughnutStructureData = function() {
			return {
				datasets: [{
					data: [],
					backgroundColor: [],
					borderColor: [],
					borderWidth: 2
				}],
				labels: []
			}
		};

		var generalChartOptions = {
			legend: {
				position: 'bottom',
				labels: { 
					fontColor: 'white',
					fontSize: 16,
					padding: 36
				}
			}
		};


		var getRandomInt = function (min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
		};

		var colorGroupIndex = getRandomInt(0, 4);		

		var renderTypeDistributionChart = function () {
			var renderData = getTypeDistributionData(tasksTypeDistribution, "blue");
			colorGroupIndex += 1;

			charts["typeChart"] = new Chart("typeDistribution", {
				type: 'doughnut',
				data: renderData.data,
				options: generalChartOptions
			});
		};

		var renderPriorityDistributionChart = function () {
			var renderData = getTypeDistributionData(tasksPriorityDistribution, "red");
			colorGroupIndex += 1;

			charts["priorityChart"] = new Chart("priorityDistribution", {
				type: 'doughnut',
				data: renderData.data,
				options: generalChartOptions
			});
		};

		var renderPlatformDistributionChart = function () {
			var renderData = getTypeDistributionData(tasksPlatformDistribution, "red");
			colorGroupIndex += 1;

			charts["priorityChart"] = new Chart("platformDistribution", {
				type: 'doughnut',
				data: renderData.data,
				options: generalChartOptions
			});
		};

		var getTypeDistributionData = function (tasksDistribution, color) {
			var taskDistributionData = getTaskDistributionData(tasksDistribution, color);
			return {
				data: taskDistributionData,
			};
		};

		var getTaskDistributionData = function (tasksDistribution, color) {
			var doughnutData = getDoughnutStructureData();

			colorGroupIndex = colorGroupIndex > 4 ? 0 : colorGroupIndex;
			var colorIndex = (colorGroupIndex * 6 - 1) >= 0 ? (colorGroupIndex * 6 - 1) : 0;

			for (var label in tasksDistribution ) {
				if (tasksDistribution.hasOwnProperty(label)) {
					var distributionPercentage = calculateTaskPercentage(tasksDistribution[label]);
					doughnutData.datasets[0].data.push(distributionPercentage);
					doughnutData.labels.push(label + " " + distributionPercentage + "%");

					doughnutData.datasets[0].backgroundColor.push(prettyColors[colorIndex++]);
					doughnutData.datasets[0].borderColor.push("white");
				}
			}
			return doughnutData;
		};

		var renderTaskDistribution = function () {
			var myDoughnutChart = new Chart(ctx, {
				type: 'doughnut',
				data: data,
				options: options
			});
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


		var calculateTaskPercentage = function (distributionCount) {
			return Math.floor(distributionCount * 100 / tasksCount);
		}

		return function () {

			tasksCount = jiraTasks.length;
			var magicColorIndex = 5;


			for (var i = 0; i < tasksCount ; i++) {
				tasksTypeDistribution[ jiraTasks[i].type ] = tasksTypeDistribution[ jiraTasks[i].type ] == undefined ? 1 : tasksTypeDistribution[ jiraTasks[i].type ] + 1;
				tasksPriorityDistribution[ jiraTasks[i].priority ] = tasksPriorityDistribution[ jiraTasks[i].priority ] == undefined ? 1 : tasksPriorityDistribution[ jiraTasks[i].priority ] + 1;
				tasksPlatformDistribution[ jiraTasks[i].platform ] = tasksPlatformDistribution[ jiraTasks[i].platform ] == undefined ? 1 : tasksPlatformDistribution[ jiraTasks[i].platform ] + 1;
				
				document.getElementsByClassName('slides')[0].innerHTML += "<section><h2><font color='" + prettyColors[i + magicColorIndex] + "'>" + jiraTasks[i].id + "</font><br>"  + jiraTasks[i].name + "</h2>" + "<p> <font color='" + prettyColors[i + magicColorIndex + 1 ] + "'>" + jiraTasks[i].summary + "</font></p>" + "</section>";
			}

			Reveal.initialize({
				controls: false,
				progress: true,
				history: true,
				center: true,
				transition: 'none', // none/fade/slide/convex/concave/zoom
			});

			Reveal.addEventListener( 'slidechanged', function( event ) {
	    		// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	    		if (event.indexh === 2) {
	    			renderPriorityDistributionChart();
	    		}
	    		if (event.indexh === 3) {
	    			renderTypeDistributionChart();
	    		}
	    		if (event.indexh === 4) {
	    			renderPlatformDistributionChart();
	    		}
	    	});



	    	//renderTypeDistributionChart();
            //renderSprintHistoryChart();
            //renderTaskDistribution();


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
