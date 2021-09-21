# React portfolio

Practice using React and SASS

[![Netlify Status](https://api.netlify.com/api/v1/badges/90e06dec-07cd-4196-addb-413af8d9b2c2/deploy-status)](https://app.netlify.com/sites/alinasavin/deploys)

Check out my practice portfolio [here](https://alinasavin.netlify.app/)

Check out [this](https://dev.to/alinasavin/css-preprocessors-the-magic-touch-of-sass-40pk) technical blog for more things Sass.

# Getting started

[Set up React Ap](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

- npm install

- cd portfolio-sass

- npm start

# File structure

- Components

  - TopBar
  - Menu
  - Intro
  - Portfolio (skills)
  - Projects
  - Experience
  - contact

- CSS

  - Sass

- Data
  `data.js`

- Assets

## Colours and Font

Most colours used within the app are located within `global.scss`, change all the colours to meet your needs.

Global font family/font-sizes etc. are located within `App.scss`.

## Set up Sass

![node add](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qiyxgwwhzbh1j6flivgk.png)

### Set up project

Each component has a separate scss file `experience.sass`.

Variables, mixins and different features are kept in `global.scss` file, that are imported in the scss file of the component using _@import_

```
@import '../../global.scss';

```

## Sass main features used

## Variables

```
$mainColor: #514663;

```

```

.experience {
  background-color: $secondaryColor;
}

```

## Mixins

```
@mixin flexCenter($direction) {
  display: flex;
  align-items: center;
  flex-direction: $direction;
}
```

```
.experience {
  background-color: $secondaryColor;
  @include flexCenter(column);

  @include mobile {
    justify-content: space-around;
  }
}

```

To find out more, you can access the documentation [here](https://sass-lang.com/guide).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
