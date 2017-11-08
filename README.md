# SprintShow
automated sprint review slides


**How to use, thanks to @thokari:**

Run this command:
`./gradlew getIssueData -PjiraUsername=<account_with_permissions> -PjiraPassword=<password_for_account> -PissueIds=AD-8349,AD-8350`

It will generate the file `scripts/jiratasks.js`

## how to load the dependencies
use nvm https://github.com/creationix/nvm
```
# install nvm
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.19.0/install.sh | bash
$ source ~/.nvm/nvm.sh

# install npm
$ nvm install stable
# output:
# Version 'stable' not found - try `nvm ls-remote` to browse available versions.
$ nvm ls-remote
$ nvm install 0.11.14
$ nvm use 0.11.14
$ nvm alias default stable
# output:
# ! WARNING: Version 'stable' does not exist.
# default -> stable (-> N/A)
$ nvm alias default 0.11.14

# install bower
$ npm install -g bower

# install jquery-pjax in project: cd projectdir
$ bower init
$ bower install jquery-pjax --save
```