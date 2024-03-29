import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut , updateProfile} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"; 
  // TODO: Add SDKs for Firebase products that you want to use
  const firebaseConfig = {
    apiKey: "AIzaSyDuZLVk6B1xG-zN_dQVOlGa5ayT5nSW2nU",
    authDomain: "image-seq-password.firebaseapp.com",
    projectId: "image-seq-password",
    storageBucket: "image-seq-password.appspot.com",
    messagingSenderId: "1012026876474",
    appId: "1:1012026876474:web:564aec9752b422cb604b03",
    measurementId: "G-CVSCK6B1PL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.querySelector('.games-container').classList.remove('invisible');
    document.querySelector('.notLoggedIn').classList.add('invisible');
  }
  else{
    // document.querySelector('.games-container').classList.toggle('invisible');
    document.querySelector('.notLoggedIn').classList.remove('invisible');
  }
})