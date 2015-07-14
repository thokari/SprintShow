define(	function () {
	return {
		getCurrentSprint: function () {
			return [
				{
					storyPoints : 5,
					title: "AD-1234 PayPalPlus wurst" 
				},
				{
					storyPoints : 13,
					title: "AD-9521 jajageanu" 
				},
				{
					storyPoints : 5,
					title: "EPG-1234 och nein schonwieder" 
				},
				{
					storyPoints : 5,
					title: "AD-21254 nope" 
				},
				{
					storyPoints : 31,
					title: "Doof-123 huhu das geht" 
				}
			];
		},
		getSprintHistory: function (){
			return [
				{
					sprintName: "Sprint 1",
								storyPoints: {
									promised: "32",
									completed: "25",
									pulled: "5",
								}
				},
				{
					sprintName: "Sprint 2",
								storyPoints: {
									promised: "25",
									completed: "35",
									pulled: "10",
								}
				},
				{
					sprintName: "New Team 1",
								storyPoints: {
									promised: "35",
									completed: "10",
									pulled: "0",
								}
				},
				{
					sprintName: "New Team 1 sprint 2",
								storyPoints: {
									promised: "20",
									completed: "55",
									pulled: "35",
								}
				}
			];
		}
	};
}
);