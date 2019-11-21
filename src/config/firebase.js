import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC43xvuWelw2yNK-_cGNtML0CN5Nyo5paI',
  authDomain: 'boticario-challenger.firebaseapp.com',
  databaseURL: 'https://boticario-challenger.firebaseio.com',
  projectId: 'boticario-challenger',
  storageBucket: 'boticario-challenger.appspot.com',
  messagingSenderId: '663765930677',
  appId: '1:663765930677:web:dea4836c1a55ecf28424fc',
  measurementId: 'G-1J6ZSJWX51',
};

export default firebase.initializeApp(firebaseConfig);
