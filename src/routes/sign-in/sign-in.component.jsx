import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
  {/* useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocFromAuth(response.user);
    }
  }, []) */}

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth( user );
  }

  {/* const logGoogleRedirectUser = async () => {
    const {user} = await signInWithGoogleRedirect()

  } */}

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      {/* <button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button> */}
      <SignUpForm/>
    </div>
  )
}

export default SignIn;
