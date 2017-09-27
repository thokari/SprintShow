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
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.admin/sec59cb0ac59d/?ViewAction=MBO-ViewTrustedShopsCertificates&ObjectID=20878' target='_blank'>ePages6 MBO</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/epages/ukunity.admin/sec30f1650aa0/?ViewAction=UnityMBO-ViewTrustedShopsCertificates&ObjectID=28392' target='_blank'>ePagesNow MBO</a>"
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
		id:"AD-8254",
		name:"Google Shopping: Activate mexican product feed",
		type:"Task",
		summary:"As a merchant I want to list my products at google shopping, in mexican language.",
		priority:"Critical",
		integrated:"7.15.0",
		platform:"ePages6",
		links: [
			"<a href='https://demounity.ocean-unity.epages.systems/epages/demounity.admin/secb771980d4a/?ViewAction=MBO-ViewSettings&ObjectID=28493' target='_blank'>ePagesNow DE</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/epages/ukunity.admin/sec30f1650aa0/?ViewAction=MBO-ViewSettings&ObjectID=28494' target='_blank'>ePagesNow UK</a>"
		]
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
			"<a href='https://demounity.ocean-unity.epages.systems/epages/demounity.admin/secb771980d4a/?ViewAction=MBO-ViewSettings&ObjectID=28493' target='_blank'>ePagesNow DE</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/epages/ukunity.admin/sec30f1650aa0/?ViewAction=MBO-ViewSettings&ObjectID=28494' target='_blank'>ePagesNow UK</a>"
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
	}
	];
});