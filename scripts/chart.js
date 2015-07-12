define(function (require) {
	return {
	    renderCharts: function () {
	    	var data = [
			    {
				value: 50,
				color:"#F7464A",
				highlight: "#FF5A5E",
				label: "Red"
			    },
			    {
				value: 50,
				color: "#46BFBD",
				highlight: "#5AD3D1",
				label: "Green"
			    },
			    {
				value: 50,
				color: "#FDB45C",
				highlight: "#FFC870",
				label: "Yellow"
			    },
			    {
				value: 50,
				color: "#987654",
				highlight: "#45613",
				label: "Wurst"
			    }
			];
			var lastSprints = {
				canvasName: "myChart",
				data: data
			};
	    	this.renderDoughnutChart(lastSprints);
	    },
		renderDoughnutChart : function (chartData){
			require("./charts/doughnut").setCanvasName(chartData.canvasName).renderChart(chartData.data);
		}
	};
});
