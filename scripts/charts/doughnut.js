define(['randomcolor','chartJS'],function (randomcolor) {
	return {
		canvasName: '',
		setCanvasName: function (name){
			this.canvasName = name;
			return this;
		},
		renderChart: function(chartData){
			var printData = this.generateDoughnutData(chartData.data);
			var ctx = document.getElementById(chartData.canvasName).getContext("2d");
			this.generateDoughnutLegend(chartData.canvasName);
			
			var myDoughnutChart = new Chart(ctx).Doughnut(printData,{
				percentageInnerCutout : 70,
				segmentShowStroke: false,
				animateRotate: false
			});
		},
		generateDoughnutData: function (rawData) {
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
					var TopPos = 0;//(height/2) - ((pieChartData.length * fontHight)/2);
					var yPos = TopPos + fontHight;
					var xPos = 0  ;//width/2;
					var blockSize = 10;
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
