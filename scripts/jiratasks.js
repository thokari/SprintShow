define(function () {
    return [
    {
        "id": "AD-8353",
        "name": "Remove ipayment from unity demoshoptypes",
        "type": "Task",
        "summary": "Remove ipayment from unity demoshoptypes",
        "priority": "Major",
        "integrated": "7.16.0",
        "platform": "ePages6"
    },
    {
        "id": "AD-8223",
        "name": "Mollie: Use redirect instead of post to external payment page",
        "type": "Research",
        "summary": "We are doing a POST request to their payment page, but this needs to be a redirect request.",
        "priority": "Critical",
        "integrated": "7.16.0",
        "platform": "ePagesJ"
    },
    {
        "id": "ESF-1647",
        "name": "",
        "type": "Bug",
        "summary": "The ESF tests for PayPal Express are broken and is not running in the epages pipeline right now",
        "priority": "Major",
        "integrated": "7.16.0",
        "platform": "ePages6"
    }
]
})
