# Intro

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In this app have been used modern features such as `functional components`, `hooks( also custom )` and `context api`
In the layout bootstrap framework has been included and own styles have been included with sass by component

The application is available publicly at the following URL
`https://oompaspagermanps.netlify.app`

# Getting Started

* Clone repository

* Type npm install from directory root

* To start app type `npm start` or `yarn start`
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    The page will reload if you make edits.\
    You will also see any lint errors in the console.

* To run testing type `npm run test` or `yarn run test`
    Launches the test runner in the interactive watch mode.\

* To build type `npm run build`
    Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the build for the best performance.
    The build is minified and the filenames include the hashes.\
    Your app is ready to be deployed!


# App Requirements

The app must be a spa with two views. In the first view (MainView) we will find the first Oompa with a search engine to be able to find each one of them on the page shown. We can filter the search by name, surname and profession. We have also included a pager with back and forth functionality. At all times you will see which page we are on.
When you click on a title of each oompa, you will be able to see the detail of said oompa (DetailView). This navigation will be done through router-dom being able to return to home from the detail. When the application is accessed again on another occasion, the data will be loaded from the client without the need to make another query to the server


# Packages used

* node-sass to styles
* prop-types to check data types in components
* react-router-dom to navigate between routes in the application
* enzyme to testing suit
* enzyme-to-json to testing components views render
* testing react-hooks to testing hooks
* enzyme-adapter-react-17 to resolve problem in react v17 with enzyme