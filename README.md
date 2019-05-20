# Zero_Waste - RUHacks
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Live link: https://environment-241007.firebaseapp.com/

## Introduction 
While there are many solutions exist for environmental issues, they often exist in the form of small businesses and research teams that may not be well promoted. Our project is to build a platform where people can know about these efforts and support them. This is also a platform where people can donate and acquire waste/recyclable materials from others, as well as shop and sell their environmental-friendly products.

## Available Scripts
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## To develop the application offline:
* [Install node/npm](https://nodejs.org/en/download/)
* Install the dependencies: 
```sh
npm install
```

* [Install Firebase](https://firebase.google.com/docs/auth/web/start)
```sh
firebase init
firebase login
```

* (For Firebase) Change the authentication in `<header></header>` to the authentication of your app
```sh
firebase use --add
firebase serve 
open localhost:5000
```

* Deploy the application:
```sh
npm run build
firebase deploy
```
