define(['randomcolor','chartJS'],function (randomcolor) {
	return {
		renderChart: function(chartData){
			//this.generateDoughnutLegend(chartData.canvasName);
			var ctx = document.getElementById(chartData.canvasName).getContext("2d");
			var printData = this.processData(chartData.data);
			
			var myDoughnutChart = new Chart(ctx).Doughnut(printData,{
				percentageInnerCutout : 70,
				segmentShowStroke: false,
				animateRotate: false
			});
		},
		processData: function (rawData) {
			var data = [];
			for (i = 0; i < rawData.length; i++) {
    			data.push(
	    			{
					value: rawData[i].storyPoints,
					color: randomcolor({luminosity: 'bright',hue: 'blue'}),
					highlight: randomcolor({luminosity: 'bright',hue: 'orange'}),
					label: rawData[i].title
				    }
			    );
			}
			return data;
		},
		generateDoughnutLegend: function (canvasName) {
			var canvasContex = document.getElementById(canvasName+"Legend").getContext("2d");
		}
	};
});
