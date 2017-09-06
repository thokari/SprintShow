define(function () {
	return [
	{
		id:"AD-8263",
		name:"Trusted Shops: Change Logo",
		type:"Task",
		summary:"We need to change the Logo of the trusted shops integration in epages now and 6. The logo is shown on the settings page.",
		priority:"Blocker",
		integrated:"7.14.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.admin/sec59cb0ac59d/?ViewAction=MBO-ViewTrustedShopsCertificates&ObjectID=20878' target='_blank'>ePages6 MBO</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/epages/ukunity.admin/sec30f1650aa0/?ViewAction=UnityMBO-ViewTrustedShopsCertificates&ObjectID=28392' target='_blank'>ePagesNow MBO</a>"
		]
	},
	{
		id:"AD-8248",
		name:"Paypal Plus: Improve wording on settings page",
		type:"Task",
		summary:"With the new payment selection page we are replacing the marketing text, so we can clean up the settings page of Paypal Plus",
		priority:"Blocker",
		integrated:"7.14.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.admin/sec59cb0ac59d/?ViewAction=MBO-ViewSettings&ObjectID=20942' target='_blank'>ePages6 MBO</a>",
			"<a href='https://demounity.ocean-unity.epages.systems/epages/ukunity.admin/seccd1699821c/?ViewAction=MBO-ViewSettings&ObjectID=28491' target='_blank'>ePagesNow MBO</a>"
		]
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
			"<a href='https://demounity.ocean-unity.epages.systems/epages/demounity.admin/secb771980d4a/?ViewAction=MBO-ViewSettings&ObjectID=28493' target='_blank'>ePagesNow DE</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/epages/ukunity.admin/sec30f1650aa0/?ViewAction=MBO-ViewSettings&ObjectID=28494' target='_blank'>ePagesNow UK</a>"
		]
	},
	{
		id:"AD-6843",
		name:"DHL: Switch to GK2.2 API",
		type:"Epic",
		summary:"Based on the results of the research task we should switch to the new GK2.2 API.",
		priority:"Major",
		integrated:"7.14.0",
		platform:"ePages6"
	},
	{
		id:"AD-6310",
		name:"Rest API Product: energyLabelsString doesn't get cleared after the labels are removed.",
		type:"Bug",
		summary:"The attribute energyLabelsString doesn't get cleared after removing the energy label for the product.",
		priority:"Major",
		integrated:"7.14.0",
		platform:"ePagesJ"
	}
	];
});