import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcf5dW0nr5_XwriGjutoZCLHgbZpUwQOM",
  authDomain: "react-e-commerce-fd1e2.firebaseapp.com",
  projectId: "react-e-commerce-fd1e2",
  storageBucket: "react-e-commerce-fd1e2.appspot.com",
  messagingSenderId: "60989963588",
  appId: "1:60989963588:web:0069784c52c0b874fd6b11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters(
  {
    prompt: "select_account"
  }
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);

  console.log(!userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
      });
    } catch (error) {
      console.log("Error creating the user", error.message)
    }
  }
}
