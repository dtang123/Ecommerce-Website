import {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from  '../../utils/firebase/firebase.utils'
import FormInput from '../../components/form-input/form-input.component'
import './sign-in-form.styles.scss'
import Button from "../../components/button/button.component"

const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields();
      console.log(response)
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no account with that email detected");
          break;
        default:
          console.log(error);
      }
    }
  }



  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value })
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in With Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;