# Powepuff Girls Show App

To run this application clone it on you machine and run "yarn" command to install all dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed.

This is a SPA created with React + Redux.

All pages of the application fetch data from TVMaze API and store it in the Redux store. Asynchronous actions are handled by Redux-saga middleware.

Show page contains the show's title, cover image, short description and list of all available episodes.

Episodes are sorted by date in ascending order.

By clicking on the episode's title redirects to the episode page. This page contains the episode's title, cover image and description. Click on Back button redirects to show page.

React-intl is used for internationalization. Default locale - en-US.

Sass is used for components styling.

Application uses EsLint for code checking and Prettier for formatting.

On a pre-commit Husky runs EsLint and Prettier.

React Testing Library is used for components testing.
