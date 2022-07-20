import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import { AuthenticationContainer } from "./authentication.styles"
import { Fragment } from 'react'


const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignInForm/>
      {/* <button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button> */}
      <SignUpForm/>
    </AuthenticationContainer>
  )
}

export default Authentication;
