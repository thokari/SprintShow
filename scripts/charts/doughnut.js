define(function () {
	return {
		canvasName: '',
		setCanvasName: function (name){
			this.canvasName = name;
			return this;
		},
		renderChart: function(data){
			var canvasName = this.canvasName;
			require(['chartJS'], function () {
				var ctx = document.getElementById(canvasName).getContext("2d");
    				Chart.defaults.global = {
						onAnimationComplete: function(){
					
							var pieChartData = this.segments;
							var width = ctx.canvas.clientWidth;
							var height = ctx.canvas.clientHeight;
							var fontHightFactor = 30;
							var fontHight = height/fontHightFactor; 
							ctx.font= fontHight+"px Georgia";
							var TopPos = (height/2) - ((pieChartData.length * fontHight)/2);
							var yPos = TopPos;
							var xPos = width/2;
							for (i = 0; i < pieChartData.length; i++) {
								ctx.fillStyle = pieChartData[i].fillColor;
								var text = pieChartData[i].label +": "+  pieChartData[i].value
					    			ctx.fillText(text,xPos,yPos);
								yPos += fontHight;
							}
						
						}
					};
				
    			var myDoughnutChart = new Chart(ctx).Doughnut(data,{
					percentageInnerCutout : 70,
					segmentShowStroke: false,
					animateRotate: false
				});
			});
		}
	};
});
