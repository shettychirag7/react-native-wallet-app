# React Native Wallet App

A React native project demonstrating a skeleton wallet app features built using the react native CLI. This project demonstrates using a unidirectional data flow design pattern and seperation of concerns. It's designed to demonstrate how apps can be scalable and easily testable achieving a code coverage of over 95%.

This project uses Redux for state management, react navigation V6 for handling navigation, sagas for async tasks.

<img src="https://github.com/shettychirag7/react-native-wallet-app/blob/main/docs/wallet-app-demo.gif" width="168.75" height="300" alt="demo-gif" />

### Key highlights of project

- Code coverage 95%
- Dynamically inject mocks in API layer

### Env Setup Requirment

- Node v14+
- yarn
- JDK v11+ (Open JDK by Azul Zulu using Homebrew recommended)
- Xcode v10+
- Android SDK v30+
- Cocoapods

More details on setting up environment can be found here: https://reactnative.dev/docs/environment-setup

### Installation

> yarn install

### iOS Setup

> cd ios && pod install

### Run android

> yarn android

### Run iOS

> yarn ios

### Run Unit Tests

> yarn test
