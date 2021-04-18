import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC7i_cJ949cOS_XJZpkjvGQ4hOSn8HlWEw',
  authDomain: 'infomarket-bbb0f.firebaseapp.com',
  databaseURL: 'https://infomarket-bbb0f-default-rtdb.firebaseio.com/',
  projectId: 'infomarket-bbb0f',
  messagingSenderId: '351114977627',
  appId: '1:351114977627:android:59f2bb1cdf2f85f31afa7e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
