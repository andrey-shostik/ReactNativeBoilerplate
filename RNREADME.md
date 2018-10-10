# RN App

## Table of Contents

* [Prerequisites](#prerequisites)
* [Setup](#setup)
* [Development](#development)
* [Recommendations](#recommendations)


## Prerequisites

* Xcode (Mac only)
* Ruby, Cocopods
* Node (recently new version, v8 ->)
* Android Studio or android SDK installed separately

## Setup

If you haven't used React Native before you should follow the [official tutorial](https://facebook.github.io/react-native/docs/getting-started.html) first.
Check the `Building Projects with Native Code` tab and go through both target operating systems instructions
all the way until the `Creating a new application` step.

Then when you have done this clone this project somewhere on your machine

#### iOS

Open **ios/OurCnCReactNative.xcworkspace** in Xcode and select your device from the toppish left corner and click the play button.

> NOTE: you need to be added to the correct Apple development team to run the app on device.

## Development

This project is using [Typescript](https://www.typescriptlang.org/) to enhance JavaScript with types.

Start the React Native packager

```sh
npm start
```

And in a new tab run the app with our aliases

```sh
rnra/rnri
```

### Running on device

#### Android

You can run the app on your device just by connecting it to the computer and running

```sh
rnra
```

#### iOS

Open **ios/OurCnCReactNative.xcworkspace** in Xcode and select your device from the top left corner and click the play button.

> NOTE: you need to be added to the correct Apple development team to run the app on device.

## Recommendations
### Use aliases
```sh
alias rnra="react-native run-android"
alias rnri="react-native run-ios"
alias tsf="yarn tslint:fix"
alias clean="npm run clean"
alias add="yarn add"
```
