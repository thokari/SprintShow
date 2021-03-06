define(function () {
	return [
	{
		id:"UNITY-3422",
		name:"REST-API: Add product attribute (page) title",
		type:"Technical Story",
		summary:"For SEO reasons there should be an attribute called 'title' on the product resource which is mapped to the ep6 attribute 'DisplayTitle' and contains the information about the page title for the product page.",
		priority:"Critical",
		integrated:"7.11.0",
		platform:"ePagesJ"
	},
	{
		id:"AD-8038",
		name:"REST API: Change locale of the Basket",
		type:"New Feature",
		summary:"We want to have a REST call to change the locale of the basket.",
		priority:"Major",
		integrated:"7.12.0",
		platform:"ePagesJ"
	},
	{
		id:"AD-7707",
		name:"Change Mastercard Logo",
		type:"Task",
		summary:"As a merchant I do not want to show outdated payment logos to my customers.",
		priority:"Major",
		integrated:"7.11.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.admin/seca716b8beb2/?ViewAction=MBO-ViewSettings&ObjectID=20905' target='_blank'>ePages6 MBO</a>"
		]
	},
	{
		id:"AD-7402",
		name:"Paypal Express: Redirect to Paypal automatically",
		type:"Task",
		summary:"On the 'pay with Paypal' step of the checkout we are now redirecting the endcustomer to Paypal automatically.",
		priority:"Major",
		integrated:"7.10.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.sf/en_GB/?ObjectPath=/Shops/DemoShop/Products/lt_0401107001' target='_blank'>ePages6</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/p/indoor-plant-calathea' target='_blank'>ePagesNow</a>"
		]
	},
	{
		id:"AD-7360",
		name:"Paypal Express: Clean up settings page",
		type:"Task",
		summary:"As a merchant I dont want to be confused by to many options and links while trying to setting up Paypal",
		priority:"Major",
		integrated:"7.10.0",
		platform:"ePages6",
		links: [
			"<a href='https://ocean-unity.epages.systems/epages/DemoShop.admin/seca716b8beb2/?ViewAction=MBO-ViewSettings&ObjectID=20898' target='_blank'>ePages6 MBO</a>",
			"<a href='https://ukunity.ocean-unity.epages.systems/epages/ukunity.admin/sec2e3f8b790a/?ViewAction=MBO-ViewSettings&ObjectID=21614' target='_blank'>ePagesNow MBO</a>"
		]
	},
	{
		id:"AD-7710",
		name:"Research SSO for CM4all",
		type:"Research",
		summary:"Clarify the requirements and possible ways to solve",
		priority:"Major",
		integrated:"",
		platform:"ePagesJ",
		links: [
			"<a href='https://epages.atlassian.net/wiki/spaces/TI/pages/183535812/New+SSO+Proposal?preview=/183535812/184200997/SSO_plan.png' target='_blank'>SSO Plan</a>"
		]
	}
	];
});