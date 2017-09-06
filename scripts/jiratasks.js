define(function () {
	return [
	{
		id:"AD-8263",
		name:"Trusted Shops: Change Logo",
		type:"Task",
		summary:"We need to change the Logo of the trusted shops integration in epages now and 6. The logo is shown on the settings page.",
		priority:"Blocker",
		integrated:"7.14.0",
		platform:"ePages6"
	},
	{
		id:"AD-8248",
		name:"Paypal Plus: Improve wording on settings page",
		type:"Task",
		summary:"With the new payment selection page we are replacing the marketing text, so we can clean up the settings page of Paypal Plus",
		priority:"Blocker",
		integrated:"7.14.0",
		platform:"ePages6"
	},
	{
		id:"AD-7756",
		name:"Spreedly Stripe: Localize register Form",
		type:"Improvement",
		summary:"As a merchant I want to sign up for a new payment provider in my language, we were not setting a locale for the setup form of Stripe.",
		priority:"Critical",
		integrated:"7.14.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.admin/seca716b8beb2/?ViewAction=MBO-ViewSettings&ObjectID=20905' target='_blank'>ePages6 MBO</a>"
		]
	},
	{
		id:"AD-6843",
		name:"DHL: Switch to GK2.2 API",
		type:"Epic",
		summary:"Based on the results of the research task we should switch to the new GK2.2 API.",
		priority:"Major",
		integrated:"7.14.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.sf/en_GB/?ObjectPath=/Shops/DemoShop/Products/lt_0401107001' target='_blank'>ePages6</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/p/indoor-plant-calathea' target='_blank'>ePagesNow</a>"
		]
	},
	{
		id:"AD-6310",
		name:"Rest API Product: energyLabelsString doesn't get cleared after the labels are removed.",
		type:"Bug",
		summary:"The attribute energyLabelsString doesn't get cleared after removing the energy label for the product.",
		priority:"Major",
		integrated:"7.14.0",
		platform:"ePagesJ",
		links: [
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.admin/seca716b8beb2/?ViewAction=MBO-ViewSettings&ObjectID=20898' target='_blank'>ePages6 MBO</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/epages/ukunity.admin/sec2e3f8b790a/?ViewAction=MBO-ViewSettings&ObjectID=21614' target='_blank'>ePagesNow MBO</a>"
		]
	}
	];
});