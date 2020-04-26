import firebase from 'firebase/app';
import database from 'firebase/database';

var config = {
	apiKey: 'AIzaSyBCBXqUpC63yqVet479R9ZGgw5SOOLaZvc',
	authDomain: 'abhinav-photo.firebaseapp.com',
	databaseURL: 'https://abhinav-photo.firebaseio.com',
	projectId: 'abhinav-photo',
	storageBucket: 'abhinav-photo.appspot.com',
	messagingSenderId: '405541571345',
	appId: '1:405541571345:web:79cf13c04e164cc8125ab0',
};

let firebaseCache;

export const getFirebase = () => {
	if (firebaseCache) {
		return firebaseCache;
	}

	firebase.initializeApp(config);
	firebaseCache = firebase;
	return firebase;
};
