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
		var filteredJiraTasks = [];
		var colorGroupIndex = 0;
		var graphColorGroupIndex = 1;
		var textColorGroupIndex = 13;

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
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						return data.labels[tooltipItem.index];
					}
				}
			},
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

		var renderTypeDistributionChart = function () {
			var renderData = getTypeDistributionData(tasksTypeDistribution);
			renderData["label"] = "Type";
			colorGroupIndex += 1;

			charts["typeChart"] = new Chart("typeDistribution", {
				type: 'doughnut',
				data: renderData.data,
				options: generalChartOptions
			});
		};

		var renderPriorityDistributionChart = function () {
			var renderData = getTypeDistributionData(tasksPriorityDistribution);
			renderData["label"] = "Priority";

			colorGroupIndex += 1;

			charts["priorityChart"] = new Chart("priorityDistribution", {
				type: 'doughnut',
				data: renderData.data,
				options: generalChartOptions
			});
		};

		var getTypeDistributionData = function (tasksDistribution) {
			var taskDistributionData = getTaskDistributionData(tasksDistribution);
			return {
				data: taskDistributionData,
			};
		};

		var getTaskDistributionData = function (tasksDistribution) {
			var doughnutData = getDoughnutStructureData();

			colorGroupIndex = colorGroupIndex > 4 ? 0 : colorGroupIndex;
			var colorIndex = (colorGroupIndex * 6 - 1) >= 0 ? (colorGroupIndex * 6 - 1) : 0;

			for (var label in tasksDistribution ) {
				if (tasksDistribution.hasOwnProperty(label)) {
					var distributionPercentage = calculateTaskPercentage(tasksDistribution[label], tasksCount);
					doughnutData.datasets[0].data.push(distributionPercentage);
					doughnutData.labels.push(label + " - " + tasksDistribution[label] + " Tasks - " + distributionPercentage + "%");

					doughnutData.datasets[0].backgroundColor.push(prettyColors[colorIndex++]);
					doughnutData.datasets[0].borderColor.push("white");
				}
			}
			//console.log(doughnutData);
			return doughnutData;
		};

		var renderTaskDistribution = function () {
			var myDoughnutChart = new Chart(ctx, {
				type: 'doughnut',
				data: data,
				options: options
			});
		};

		var renderSprintHistoryChart = function () {
			var taskDistributionData = getTaskDistributionData();

			line.renderChart({
				canvasName: "history",
				data: taskDistributionData
			});
		};

		var calculateTaskPercentage = function (distributionCount, total) {
			return Math.floor(distributionCount * 100 / total);
		};

		var defineFilteredTaskDistributionData = function (callback) {
			colorGroupIndex = graphColorGroupIndex;

			var filteredJiraTasks = jiraTasks.filter(callback);
			tasksCount = filteredJiraTasks.length;

			tasksTypeDistribution = {};
			tasksPriorityDistribution = {};
			tasksPlatformDistribution = {};

			//console.log(filteredJiraTasks);

			for (var i = 0; i < tasksCount ; i++) {
				tasksTypeDistribution[ filteredJiraTasks[i].type ] = tasksTypeDistribution[ filteredJiraTasks[i].type ] == undefined ? 1 : tasksTypeDistribution[ filteredJiraTasks[i].type ] + 1;
				tasksPriorityDistribution[ filteredJiraTasks[i].priority ] = tasksPriorityDistribution[ filteredJiraTasks[i].priority ] == undefined ? 1 : tasksPriorityDistribution[ filteredJiraTasks[i].priority ] + 1;
				tasksPlatformDistribution[ filteredJiraTasks[i].platform ] = tasksPlatformDistribution[ filteredJiraTasks[i].platform ] == undefined ? 1 : tasksPlatformDistribution[ filteredJiraTasks[i].platform ] + 1;
			}

			return filteredJiraTasks;
		};
		var addMinorTasksList = function (){
			var minorTasksList = defineFilteredTaskDistributionData( function (elem) {
				return elem.relevance == "minor";
			});
			var minorTasksText = "<section><h3>Minor Tasks</h3>";
			for(var j = 0; j < minorTasksList.length; j++){
				var issueImg = "<img height='16px' style='background:none; border:none; box-shadow:none; padding: 0px; margin: 2px;' src='img/" + minorTasksList[j].priority + ".svg'/>";
				var jiraLinkId = "<a target='_blank' href='https://epages.atlassian.net/browse/" + minorTasksList[j].id + "'>" + minorTasksList[j].id + "</a>";
				minorTasksText += "<p style='font-size: 25px;'>"+ issueImg + jiraLinkId +" : "+minorTasksList[j].name+"</p>";

			}
			minorTasksText += "</section>";
			document.getElementsByClassName('slides')[0].innerHTML += minorTasksText;
		}

		var addJiraSlidesToPresentations = function () {

			var filteredJiraTasks = defineFilteredTaskDistributionData( function (elem) {
				return elem.relevance != "minor";
			});


			addMinorTasksList();
			var totalTasksCount = filteredJiraTasks.length;
			var magicColorIndex = textColorGroupIndex;

			for (var i = 0; i < totalTasksCount ; i++) {

				var issueImg = "<img height='32px' style='background:none; border:none; box-shadow:none; padding: 0px; margin: 0px;' src='img/" + filteredJiraTasks[i].priority + ".svg'/>";

				var jiraLinkId = "<a target='_blank' href='https://epages.atlassian.net/browse/" + filteredJiraTasks[i].id + "'>" + filteredJiraTasks[i].id + "</a>";

				var contentText = "<section><h3>" + issueImg + "<font color='" + prettyColors[i + magicColorIndex] + "'>" + jiraLinkId + "</font></h3><h4>"  + filteredJiraTasks[i].name + "</h4>" + "<p> <font color='" + prettyColors[i + magicColorIndex + 1 ] + "'>" + filteredJiraTasks[i].summary + "</font>";
				contentText += "<p style='white-space: nowrap;'>"
				for (var j = 0; j < filteredJiraTasks[i].links.length ; j++) {
						contentText += "<span >" + filteredJiraTasks[i].links[j];
						if((j+1) != filteredJiraTasks[i].links.length) {
							if(j != 0 && j % 2 == 0){
								contentText += "</br>"
							}else{
							    contentText += "<span style='padding-left: 5px; padding-right: 5px;'>|</span>"
							}
						}
						contentText += "</span>"
				}
				contentText += "</p>" + "</section>";

				document.getElementsByClassName('slides')[0].innerHTML += contentText;
			}

			var futureConsiderations = "<section><h3>Roadmap</h3><img style='background:none; border:none; box-shadow:none;' src='img/roadmap.png'/></section>";
			document.getElementsByClassName('slides')[0].innerHTML += futureConsiderations + "<section><h3>Questions?</h3></section>";

		};

		return function () {

			addJiraSlidesToPresentations();

			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,
				transition: 'convex', // none/fade/slide/convex/concave/zoom
			});

			Reveal.addEventListener( 'slidechanged', function( event ) {
				if (event.indexh === 2 && charts["priorityChart"] === undefined) {
					defineFilteredTaskDistributionData(function () {
						return true;
					});
					renderPriorityDistributionChart();
				}
				if (event.indexh === 3 && charts["typeChart"] === undefined) {
					defineFilteredTaskDistributionData(function () {
						return true;
					});
					renderTypeDistributionChart();
				}
			});

			document.getElementById('priorityEp6').addEventListener('click', function() {
				charts["priorityChart"].destroy();
				defineFilteredTaskDistributionData(function (elem) {
					return elem.platform == "ePages6";
				});
				renderPriorityDistributionChart();
			});

			document.getElementById('priorityEpj').addEventListener('click', function() {
				charts["priorityChart"].destroy();
				defineFilteredTaskDistributionData(function (elem) {
					return elem.platform == "ePagesJ";
				});
				renderPriorityDistributionChart();
			});

			document.getElementById('priorityTotal').addEventListener('click', function() {
				charts["priorityChart"].destroy();
				defineFilteredTaskDistributionData(function (elem) {
					return true;
				});
				renderPriorityDistributionChart();
			});

			document.getElementById('typeEp6').addEventListener('click', function() {
				charts["typeChart"].destroy();
				defineFilteredTaskDistributionData(function (elem) {
					return elem.platform == "ePages6";
				});
				renderTypeDistributionChart();
			});

			document.getElementById('typeEpj').addEventListener('click', function() {
				charts["typeChart"].destroy();
				defineFilteredTaskDistributionData(function (elem) {
					return elem.platform == "ePagesJ";
				});
				renderTypeDistributionChart();
			});

			document.getElementById('typeTotal').addEventListener('click', function() {
				charts["typeChart"].destroy();
				defineFilteredTaskDistributionData(function (elem) {
					return true;
				});
				renderTypeDistributionChart();
			});
		}();
	});
