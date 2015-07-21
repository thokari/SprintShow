define(	function () {
	return {
		getCurrentSprint: function () {
			return [
				{
					title: "PayPal Plus",
					storyPoints : 25
				},
				{
					title: "ToolsVM",
					storyPoints : 2
				},
				{
					title: "EasyMarketing",
					storyPoints : 3
				},
				{
					title: "iPayment",
					storyPoints : 4
				},
				{
					title: "Jenkins",
					storyPoints : 5
				}
			];
		},
		getCurrentSprintTypes: function () {
			return [
				{
					title: "Bug",
					storyPoints : 6
				},
				{
					title: "Task",
					storyPoints : 8
				},
				{
					title: "Story",
					storyPoints : 18
				},
				{
					title: "Improvment",
					storyPoints : 2
				},
				{
					title: "Reseach",
					storyPoints : 5
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
				}

			];
		}
	};
}
);
