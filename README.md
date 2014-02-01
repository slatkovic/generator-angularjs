A Yeoman generator for Angular apps with built in support for AMD, r.js and Karma
---


### Features:

* Angular AMD support
* Single require.js app/tests config
* Require.js optimization support (r.js)
* Karma test runner support
* Mocha/Chai support


### 1. Generating a new app

	npm install -g yo generator-generator
	npm install -g generator-angularjs

    yo angularjs


### 2. Grunt tasks


#### 2.1. Running the app in dev mode

	grunt express:dev
	http://localhost:9000


#### 2.2. Running the app in prod mode

	grunt requirejs
	grunt express:prod
	http://localhost:9000

Note: If r.js raises a bad syntax error, use the following command:

	grunt requirejs --force



#### 2.3. Running unit tests

	grunt karma:unit

