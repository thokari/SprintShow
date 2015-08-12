define(['chartJS'],function () {
	return {
		renderChart: function(chartData){
			var lineChartContex = document.getElementById(chartData.canvasName).getContext("2d");
			var myLineChart = new Chart(lineChartContex).Line(this.processData(chartData.data),{
				scaleGridLineColor : '#303030'
			});
			this.generateLegend(chartData);
		},
		processData: function (rawData) {

			var labels = [];
	    		var promised = [];
	    		var completed = [];
	    		var pulled = [];
	    		for (i = 0; i < rawData.length; i++) {
	    			labels.push(rawData[i].sprintName);
	    			var storyPoints = rawData[i].storyPoints;
	    			promised.push(storyPoints.promised);
	    			pulled.push(storyPoints.pulled);
	    			completed.push( parseInt(storyPoints.promised) + parseInt(storyPoints.pulled) - parseInt(storyPoints.leftOvers));
	    		}
			var average = this.calcAverage(completed); 
			var data = {
				labels: labels,
			    datasets: [
					{
					    label: "promised",
					    fillColor: "rgba(255,0,0,0.1)",
					    strokeColor: "rgba(255,0,0,1)",
					    pointColor: "rgba(255,0,0,1)",
					    pointStrokeColor: "#fff",
					    pointHighlightFill: "#fff",
					    pointHighlightStroke: "rgba(220,220,220,1)",
					    data: promised
					},
					{
					    label: "completed",
					    fillColor: "rgba(0,255,0,0.1)",
					    strokeColor: "rgba(0,255,0,1)",
					    pointColor: "rgba(0,255,0,1)",
					    pointStrokeColor: "#fff",
					    pointHighlightFill: "#fff",
					    pointHighlightStroke: "rgba(151,187,205,1)",
					    data: completed
					},
					{
					    label: "pulled",
					    fillColor: "rgba(255,255,0,0.2)",
					    strokeColor: "rgba(255,255,0,1)",
					    pointColor: "rgba(255,255,0,1)",
					    pointStrokeColor: "#fff",
					    pointHighlightFill: "#fff",
					    pointHighlightStroke: "rgba(151,187,205,1)",
					    data: pulled
					},
					{
					    label: "average",
					    fillColor: "rgba(120,120,120,0)",
					    strokeColor: "rgba(120,120,120,1)",
					    pointColor: "rgba(120,120,120,1)",
					    pointStrokeColor: "#fff",
					    pointHighlightFill: "#fff",
					    pointHighlightStroke: "rgba(151,187,205,1)",
					    data: average
					}
			    ]
			};
			return data;
		},
		generateLegend: function (chartData) {
			var canvas = document.getElementById(chartData.canvasName+"Legend");
			var canvasContex = canvas.getContext("2d");
			var height = canvas.height;
			var sizeFactor = height/400;
			var FontHeight = 16 * sizeFactor;
			canvasContex.font = FontHeight+"px Tahoma,Verdana,Segoe,sans-serif";
			var xPos = 20;
			var yPos = 20;
			var blockSize = 20 * sizeFactor;
			var spacer = 5 * sizeFactor;
			// red block color block
			canvasContex.fillStyle = "#FF0000";
			canvasContex.fillRect(xPos,yPos,blockSize,blockSize);
			// text
			canvasContex.fillStyle = '#c7c7c7';
			canvasContex.fillText("promised",xPos + blockSize + spacer, yPos + blockSize);
			yPos += blockSize + spacer;
			// green block color block
			canvasContex.fillStyle = "#00FF00";
			canvasContex.fillRect(xPos,yPos,blockSize,blockSize);
			// text
			canvasContex.fillStyle = '#c7c7c7';
			canvasContex.fillText("completed",xPos + blockSize + spacer, yPos + blockSize);
			yPos += blockSize + spacer;
			// yellow block color block
			canvasContex.fillStyle = "#ffFF00";
			canvasContex.fillRect(xPos,yPos,blockSize,blockSize);
			// text
			canvasContex.fillStyle = '#c7c7c7';
			canvasContex.fillText("pulled",xPos + blockSize + spacer, yPos + blockSize);
			yPos += blockSize + spacer;
			// grey block color block
			canvasContex.fillStyle = "#787878";
			canvasContex.fillRect(xPos,yPos,blockSize,blockSize);
			// text
			canvasContex.fillStyle = '#c7c7c7';
			canvasContex.fillText("average",xPos + blockSize + spacer, yPos + blockSize);
			yPos += blockSize + spacer;
		},
		calcAverage: function (completed) {
			var completedSum = 0;
			for (i = 0; i < completed.length; i++) {
				completedSum += completed[i];
			}
			var averageValue = completedSum / completed.length;
			var average = [];
			// don´t count the current sprint
			for (i = 0; i < completed.length -1; i++) {
				average.push(averageValue);
			}
			return average;
		}

	}
});
