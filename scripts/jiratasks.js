define(function () {
    return [
    {
        "id": "UNITY-4975",
        "name": "Limit token scope for epages-ui client",
        "type": "Task",
        "summary": "",
        "priority": "Critical",
        "integrated": "7.29.0",
        "platform": "ePages6",
        "relevance": "major",
        "links": [
        ]
    },
    {
        "id": "AD-8937",
        "name": "epagesj: Limit concurrent requests per Shop",
        "type": "Task",
        "summary": "",
        "priority": "Critical",
        "integrated": "7.29.0",
        "platform": "ePages6",
        "relevance": "major",
        "links": [
            '<a href="http://teamred-jenkins.vm-intern.epages.com:8080/userContent/categoryrequests-1536323026808/index.html">Current version / no limits</a></br>',
            '<a href="http://teamred-jenkins.vm-intern.epages.com:8080/userContent/categoryrequests-1536319192567/index.html">epagesj-7.27.5-shopratelimit4 / 0 maxThreadsPerShop (unlimited)</a></br>',
            '<a href="http://teamred-jenkins.vm-intern.epages.com:8080/userContent/categoryrequests-1536322298342/index.html">epagesj-7.27.5-shopratelimit4 / 20 maxThreadsPerShop</a></br>'
        ]
    }
]
})
