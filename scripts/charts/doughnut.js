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
					highlight: randomcolor(),
					label: rawData[i].title
				    }
			    );
			}
			return data;
		},
		generateDoughnutLegend: function (canvasName) {
			var canvasContex = document.getElementById(canvasName+"Legend").getContext("2d");
			Chart.defaults.global = {
				onAnimationComplete: function(){	
					var pieChartData = this.segments;
					var width = canvasContex.canvas.clientWidth;
					var height = canvasContex.canvas.clientHeight;
					var fontHightFactor = 30;
					var fontHight = height/fontHightFactor; 
					canvasContex.font= fontHight+"px Georgia";
					var TopPos = 0;
					var yPos = TopPos + fontHight;
					var xPos = 0  ;
					var blockSize = height/50;
					for (i = 0; i < pieChartData.length; i++) {
						canvasContex.fillStyle = pieChartData[i].fillColor;
						canvasContex.fillRect(xPos+fontHight-blockSize,yPos -blockSize, blockSize, blockSize)
						canvasContex.fillStyle = '#D4D4D4';
						var text = pieChartData[i].label +": ("+  pieChartData[i].value +")";
			    		canvasContex.fillText(text,xPos + fontHight + 3,yPos);
						yPos += fontHight;
					}
				
				}
			};
		}
	};
});
