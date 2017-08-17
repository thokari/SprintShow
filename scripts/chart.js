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
		var colorGroupIndex = 3;
		var filteredJiraTasks = [];

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

		var setFilteredTaskDistributionData = function (callback) {
			colorGroupIndex = 3;

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


		};

		var addJiraSlidesToPresentations = function () {

			var totalTasksCount = jiraTasks.length;
			var magicColorIndex = 5;
			
			for (var i = 0; i < totalTasksCount ; i++) {

				var issueImg = "<img height='30px' style='background:none; border:none; box-shadow:none;' src='img/" + jiraTasks[i].priority + ".svg'/>";

				var jiraLinkId = "<a target='_blank' href='https://epages.atlassian.net/browse/" + jiraTasks[i].id + "'>" + jiraTasks[i].id + "</a>";				

				var ContentText = "<section><h2>" + issueImg + "<font color='" + prettyColors[i + magicColorIndex] + "'>" + jiraLinkId + "</font><br>"  + jiraTasks[i].name + "</h2>" + "<p> <font color='" + prettyColors[i + magicColorIndex + 1 ] + "'>" + jiraTasks[i].summary + "</font>";

				if (jiraTasks[i].links) {
					ContentText += "</p>" + "<p>" + jiraTasks[i].links[0] + "&nbsp;&nbsp;&nbsp;" + jiraTasks[i].links[1];
				}

				ContentText += "</p>" + "</section>";

				document.getElementsByClassName('slides')[0].innerHTML += ContentText;
			}

			var futureConsiderations = "<section><h2>Future Sprints Goals</h2><ul><li>1&1 improvements</li><li>Performance improvements for ePages Now! launch</li><li>ePagesJ Search Research</li></ul></section>";
			document.getElementsByClassName('slides')[0].innerHTML += futureConsiderations + "<section><h3>Questions? <br>&<br> Thank yous!</h3></section><section><h3>Thank you!</h3></section>";

		};

		return function () {

			addJiraSlidesToPresentations();

			Reveal.initialize({
				controls: false,
				progress: true,
				history: true,
				center: true,
				transition: 'none', // none/fade/slide/convex/concave/zoom
			});

			Reveal.addEventListener( 'slidechanged', function( event ) {
				if (event.indexh === 2 && !charts["priorityChart"]) {
					setFilteredTaskDistributionData(function () {
						return true;
					});
					renderPriorityDistributionChart();
				}
				if (event.indexh === 3 && !charts["typeChart"]) {
					setFilteredTaskDistributionData(function () {
						return true;
					});
					renderTypeDistributionChart();
				}
			});

			document.getElementById('priorityEp6').addEventListener('click', function() {
				charts["priorityChart"].destroy();
				setFilteredTaskDistributionData(function (elem) {
					return elem.platform == "ePages6";
				});
				renderPriorityDistributionChart();
			});

			document.getElementById('priorityEpj').addEventListener('click', function() {
				charts["priorityChart"].destroy();
				setFilteredTaskDistributionData(function (elem) {
					return elem.platform == "ePagesJ";
				});
				renderPriorityDistributionChart();	
			});

			document.getElementById('priorityTotal').addEventListener('click', function() {
				charts["priorityChart"].destroy();
				setFilteredTaskDistributionData(function (elem) {
					return true;
				});
				renderPriorityDistributionChart();	
			});

			document.getElementById('typeEp6').addEventListener('click', function() {
				charts["typeChart"].destroy();
				setFilteredTaskDistributionData(function (elem) {
					return elem.platform == "ePages6";
				});
				renderTypeDistributionChart();
			});

			document.getElementById('typeEpj').addEventListener('click', function() {
				charts["typeChart"].destroy();
				setFilteredTaskDistributionData(function (elem) {
					return elem.platform == "ePagesJ";
				});
				renderTypeDistributionChart();	
			});

			document.getElementById('typeTotal').addEventListener('click', function() {
				charts["typeChart"].destroy();
				setFilteredTaskDistributionData(function (elem) {
					return true;
				});
				renderTypeDistributionChart();	
			});
		}();
	});
