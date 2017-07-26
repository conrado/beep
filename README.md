# conrado/beep

This is beyond just a starter template for the ionic 3 framework.

It is the result of following an Udemy course to completion:

https://www.udemy.com/learn-ionic-3-from-scratch/

Bellow you will find the instructions that came with generating the ionic
template which may help you run the code:

## How to use this template

*This template does not work on its own*. You will need to install ionic and
cordova, as well as firebase. I also recommend installing nvm and using node
v7.10 as that is what it was built and tested with, without troubles.

### With the Ionic CLI:

Install ionic and cordova:

```bash
$ sudo npm install -g ionic cordova
```

To run a simulator `cd` into this project's root directory and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

Development is often best done on

### Developing on firebase

This project also requires firebase, you require a project on their service so
visit their page, create an account and configure the proper settings file to
point to the correct endpoint:

- Visit https://firebase.google.com
- Edit: `src/app/app.firebase.config.ts`

It should look like this:
```
export const FIREBASE_CONFIG = {
  apiKey: "NOTAREALKEY8907DF6WLKJHjjJjpmdUXH_0Y38U",
  authDomain: "beep-00000.firebaseapp.com",
  databaseURL: "https://beep-00000.firebaseio.com",
  projectId: "beep-00000",
  storageBucket: "beep-00000.appspot.com",
  messagingSenderId: "234098250987"
};
```

### Deploy to firebase

In order to upload content to the firebase hosting and functions run:

```bash
$ npm install -g firebase-tools
$ firebase login
$ firebase deploy
```
