const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addUserMessages = functions.database.ref(`/messages/{messageId}`)
  .onWrite(event => {

    const messageKey = event.data.key;
    const messageValue = event.data.val();

    admin.database().ref(`/user-messages/${messageValue.userFromId}/${messageValue.userToId}`).child(messageKey).set(1);
    admin.database().ref(`/user-messages/${messageValue.userToId}/${messageValue.userFromId}`).child(messageKey).set(1);
  });

exports.generateLastMessage = functions.database.ref(`/messages/{messageId}`)
  .onWrite(event => {

    const messageKey = event.data.key;
    const messageValue = event.data.val();

    admin.database().ref(`/last-messages/${messageValue.userFromId}/${messageValue.userToId}`).child('key').set(messageKey);
    admin.database().ref(`/last-messages/${messageValue.userToId}/${messageValue.userFromId}`).child('key').set(messageKey);
  })
