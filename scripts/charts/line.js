define(['chartJS'],function () {
	return {
		renderChart: function(chartData){
			var lineChartContex = document.getElementById(chartData.canvasName).getContext("2d");
			var myLineChart = new Chart(lineChartContex).Line(this.processData(chartData.data),{
				scaleGridLineColor : '#303030'
			});
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
	    			completed.push(storyPoints.promised - storyPoints.leftOvers);
	    			pulled.push(storyPoints.pulled);
	    		}
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
				    fillColor: "rgba(151,187,205,0.2)",
				    strokeColor: "rgba(151,187,205,1)",
				    pointColor: "rgba(151,187,205,1)",
				    pointStrokeColor: "#fff",
				    pointHighlightFill: "#fff",
				    pointHighlightStroke: "rgba(151,187,205,1)",
				    data: pulled
				}
			    ]
			};
			return data;
		}

	}
});
