This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



Step:1 Create new project using command - “npx react-native init ProjectName —version X.XX.X (0.73.0)”

Step:2 Requirements packages - "@react-native-async-storage/async-storage",
"@react-navigation/bottom-tabs","@react-navigation/native","@reduxjs/toolkit",
"@react-navigation/stack", "axios", "react-native-config","react-redux"
"react-native-gesture-handler", "react-native-safe-area-context",
"react-native-screens",
 Step:3 Create src folder and within src create basic folders structure for project->
       - src
          - assets
             - fonts
             - images           
          - components              
             - Headers.js              
             - Button.js
          - navigation              
             - BottomTab.js              
             - App Navigator              
             - Stacks(Home, Profile, Products)
          - screens
             - Home, Login, ProductList           
          - services
             - api.js              
             - urls.js
          - redux
             - actions
                 - authAction.js
             - constants
                 - authType.js
             - reducers
                 - authSlice.js
             - store
                 - index.js           
                 - utils
             - StaticTxt.js
             - Stylesheet.create.style.js

Step:4 Create the login and home pages with style,
Step:5 Create the redux folder and create sub folders actions, constants, reducers, and store folder,
Step:6 Now, First create index file in store folder,
Step:7 After store file, create authType file in constants folder,
Step:8 After constants file, create authAction(tells to reducers -what do will reducer) file and create actions for login & logout,
Step:9 After authAction, create the authSlice/authReducer file to manipulate the data. it receives an action. In authReducer file, call a function the name of setToken which is create in action file - this function is used for save the token into async storage using async package.
Step:10 Now, Action file will call on to login screen using dispatch method.

