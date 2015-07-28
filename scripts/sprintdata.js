define(	function () {
	return {
		getCurrentSprint: function () {
			return [
				{
					title: "PayPal Plus",
					storyPoints : 35
				},
				{
					title: "Paypal Express",
					storyPoints : 6
				},
				{
					title: "Avatax",
					storyPoints : 0
				},
				{
					title: "EasyMarketing",
					storyPoints : 0
				},
			];
		},
		getCurrentSprintTypes: function () {
			return [
				{
					title: "Bug",
					storyPoints : 3
				},
				{
					title: "Task",
					storyPoints : 16
				},
				{
					title: "Story",
					storyPoints : 16
				},
				{
					title: "Improvment",
					storyPoints : 3
				},
				{
					title: "Reseach",
					storyPoints : 3
				}
			];
		},
		getSprintHistory: function (){
			return [
				{
					sprintName: "Sprint 1",
								storyPoints: {
									promised: "39",
									leftOvers: "31",
									pulled: "5"
								}
				},
				{
					sprintName: "Sprint 2",
								storyPoints: {
									promised: "49",
									leftOvers: "16",
									pulled: "0"
								}
				},
				{
					sprintName: "Sprint 3",
								storyPoints: {
									promised: "35",
									leftOvers: "26",
									pulled: "13"
								}
				},
				{
					sprintName: "Sprint 4",
								storyPoints: {
									promised: "32",
									leftOvers: "0",
									pulled: "0"
								}
				},
				{
					sprintName: "Sprint 5",
								storyPoints: {
									promised: "35",
									leftOvers: "0",
									pulled: "0"
								}
				},
				{
					sprintName: "Sprint 6",
								storyPoints: {
									promised: "29",
									leftOvers: "5",
									pulled: "0"
								}
				},
				{
					sprintName: "Sprint 7",
								storyPoints: {
									promised: "24",
									leftOvers: "5",
									pulled: "13"
								}
				},
				{
					sprintName: "Sprint 8",
								storyPoints: {
									promised: "30",
									leftOvers: "8",
									pulled: "9"
								}
				},
				{
					sprintName: "Sprint 9",
								storyPoints: {
									promised: "41",
									leftOvers: "24",
									pulled: "0"
								}
				}

			];
		}
	};
}
);
