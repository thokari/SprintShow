define(function () {
	return [
	{
		id:"AD-8349",
		name:"Appstore: Open installation links in a new tab",
		type:"Task",
		summary:"We are linking to the external partner´s landing pages from the app consecution page in a new tab.",
		priority:"Blocker",
		integrated:"7.15.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-test.epages.systems/epages/DemoShop.admin/secae620c4939/?ViewAction=MBO-ViewAppStore&ObjectID=20386&ChangeAction=SaveLoginForm&Login=admin&Password=admin' target='_blank'>ePages6 MBO</a>",
			"<a href='https://demounity.ocean-test.epages.systems/epages/demounity.admin/secaf8e9cb574/?ViewAction=UnityMBO-ViewAppStore&ObjectID=20811&ChangeAction=SaveLoginForm&Login=admin&Password=admin' target='_blank'>ePagesNow MBO</a>"
		]
	},
	{
		id:"AD-8305",
		name:"SOFORT: callbacks are not working in epages now",
		type:"Bug",
		summary:"",
		priority:"Blocker",
		integrated:"7.15.0",
		platform:"ePages6"
	},
	{
		id:"AD-8335",
		name:"Amazon Pay: capture via order status 'dispatched' does not work anymore",
		type:"Bug",
		summary:"",
		priority:"Blocker",
		integrated:"7.15.0",
		platform:"ePages6"
	},
	{
		id:"AD-8016",
		name:"Show Postfinance as a dedicated payment group",
		type:"Story",
		summary:"In epages 6 Ingenico and Postfinance are activated as one feature, but Postfinance is only working with swiss merchants.",
		priority:"Critical",
		integrated:"7.15.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-test.epages.systems/epages/Site.admin/sec2203dfa75d/?ViewAction=PBO-ViewFeatures&ObjectID=1865&ChangeAction=SaveLoginForm&Login=admin&Password=admin' target='_blank'>PBO Unity Switzerland Features</a>"
		]
	},
	{
		id:"AD-7578",
		name:"Remove GLS",
		type:"Task",
		summary:"This feature has no active users. We should remove the code entirely.",
		priority:"Minor",
		integrated:"7.15.0",
		platform:"ePages6"
	},
    {
    	id:"AD-8254",
    	name:"Google Shopping: Activate mexican product feed",
    	type:"Task",
    	summary:"As a merchant I want to list my products at google shopping, in mexican language.",
    	priority:"Critical",
    	integrated:"7.15.0",
    	platform:"ePages6",
    	links: [
    		"<a href='https://ocean-test.epages.systems/epages/DemoShopMexico.admin/sec9715f5bcb5/?ViewAction=MBO-ViewMBO&ObjectID=21363&ChangeAction=SaveLoginForm&Login=admin&Password=admin' target='_blank'>ePages6 MX</a>",
    		"<a href='https://demounitymx.ocean-test.epages.systems/epages/demounitymx.admin/secf45e9456f8/?ViewAction=UnityMBO-ViewMBO&ObjectID=21288&ChangeAction=SaveLoginForm&Login=admin&Password=admin' target='_blank'>ePagesNow MX</a>"
    	]
    }
	];
});
