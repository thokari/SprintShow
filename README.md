# SprintShow
automated sprint review slides


**How to use, thanks to @thokari:**

Run this command:
`./gradlew getIssueData -PjiraUsername=<account_with_permissions> -PjiraPassword=<password_for_account> -PissueIds=AD-8349,AD-8350`

It will generate the file `scripts/jiratasks.js`