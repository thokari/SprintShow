define(['randomcolor','chartJS'],function (randomcolor) {
	return {
		renderChart: function(chartData){
			var ctx = document.getElementById(chartData.canvasName).getContext("2d");
			this.addColorsToData(chartData.data, chartData.colorType);
			var printData = this.processData(chartData.data);
			console.log(printData);
			var myDoughnutChart = new Chart(ctx).Doughnut(printData,{
				percentageInnerCutout : 70,
				segmentShowStroke: false,
				animateRotate: false
			});
			this.generateLegend(chartData);
		},
		processData: function (rawData) {
			var data = [];
			for (i = 0; i < rawData.length; i++) {
    			data.push(
	    			{
					value: rawData[i].storyPoints,
					color: rawData[i].color,
					highlight: rawData[i].highcolor,
					label: rawData[i].title
				    }
			    );
			}
			return data;
		},
		generateLegend: function (chartData) {
			var canvas = document.getElementById(chartData.canvasName+"Legend");
			var canvasContex = canvas.getContext("2d");
			var height = canvas.height;
			var sizeFactor = height/400;
			var FontHeight = 16 * sizeFactor;
			canvasContex.font = FontHeight+"px Tahoma,Verdana,Segoe,sans-serif";
			var rawData = chartData.data
			var xPos = 0;
			var yPos = 0;
			var blockSize = 20 * sizeFactor;
			var spacer = 5 * sizeFactor;
			for (i = 0; i < rawData.length; i++) {
				// color block
				canvasContex.fillStyle = rawData[i].color;
				canvasContex.fillRect(xPos,yPos,blockSize,blockSize);
				// text
				canvasContex.fillStyle = '#c7c7c7';
				var text = rawData[i].title + " ( "+rawData[i].storyPoints+" )";
				canvasContex.fillText(text,xPos + blockSize + spacer, yPos + blockSize);
				yPos += blockSize + spacer;
			}
			
		},
		addColorsToData: function (rawData, colorType) {
			for (i = 0; i < rawData.length; i++) {
				rawData[i].color = randomcolor({luminosity: 'bright',hue: colorType.base});
				rawData[i].highcolor = randomcolor({luminosity: 'bright',hue: colorType.highcolor});
			}
			return rawData;
		}
	};
});
