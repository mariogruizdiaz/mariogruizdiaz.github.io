// firebaseHelper.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/storage';
import Resizer from 'react-image-file-resizer';
import { v4 as uuidv4 } from 'uuid';

var config = {
  apiKey: "AIzaSyBjZr3h6sKeFLTnmPyq-JmZzVq7YFAE4co",
  authDomain: "influencers-14b0c.firebaseapp.com",
  databaseURL: "https://influencers-14b0c.firebaseio.com",
  projectId: "influencers-14b0c",
  storageBucket: "influencers-14b0c.appspot.com",
  messagingSenderId: "978158793560"
};
  
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const uploadImageToFirebase = (file, onProgress, onError, onSuccess) => {
  const uniqueId = uuidv4();
  const storageRef = firebase.storage().ref();
  const uploadTask = storageRef.child(`company/images/${uniqueId}_logo`).put(file);

  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 50;
      onProgress(progress);
    },
    (error) => {
      onError(error);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        onSuccess(downloadURL, file, uniqueId);
      });
    }
  );
};

export const createThumbnail = (file, uniqueId, onSuccess) => {
  Resizer.imageFileResizer(
    file,
    150, // width
    150, // height
    'JPEG', // format
    100, // quality
    0, // rotation
    (uri) => {
      onSuccess(uri, uniqueId);
    },
    'blob' // output type
  );
};

export const uploadThumbnailToFirebase = (blob, uniqueId, onProgress, onError, onSuccess) => {
  const storageRef = firebase.storage().ref();
  const thumbnailTask = storageRef.child(`company/images/${uniqueId}_thumbnail`).put(blob);

  thumbnailTask.on('state_changed',
    (snapshot) => {
      const progress = 50 + ((snapshot.bytesTransferred / snapshot.totalBytes) * 50);
      onProgress(progress);
    },
    (error) => {
      onError(error);
    },
    () => {
      thumbnailTask.snapshot.ref.getDownloadURL().then((thumbnailURL) => {
        onSuccess(thumbnailURL);
      });
    }
  );
};
