# Read me

Goal

	This project is created for the implementation of sears parts direct PI-1 deliverables.
	Features inlcude Home page,Parts and Model search and Parts details page.
	Checked in files will inlcude a base framework using th etechnologies listed below
	and ReactJS containers and components as well as integration with back end APIs.

Technologies used	

	ReactJS
	TypeScript
	Webpack
	Jest
	Enzyme
	Bootstrap
	Sass

Folder structure

Shown below is the proposed structure, It will change as the we progress
	
	assets
	config
	src
	|
	  --__tests__
	  --modules
	  --components
			|
			| --*.tsx
			  --*.scss				
	  --containers
			| 
			  --*.tsx	
	  --apps
	  --reducers
		
	
Build and deploy instructions

 	npm run build:<env>  --Bundle the code
	npm run test --Run unit test 
		
	npm start --Starts the application. By default the webpackdev 
	server used for dev environment is pointed to localhost:3000
	
	To deploy and test the changes using GitHub pages,
		Edit the package.json home page location to your github user name.
		"homepage": "https://<username>.github.io/demoapp/",
		npm run deploy--Deploy to GitHub
		Enter github credentials when prompted
		
