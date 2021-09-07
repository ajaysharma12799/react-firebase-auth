import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

  const context = useContext(UserContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      context.setUser({email: response.user.email, uid: response.user.uid});
    })
    .catch((error) => {
      console.error(error);
      toast.error(error.message)
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  }

  const BuildUIForm = () => (
        <div>
          <Header />
            <form className="d-flex justify-content-center align-items-center flex-column mt-5">
              <div className="mb-3 w-75">
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email*" />
              </div>
              <div className="mb-3 w-75">
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password*" />
              </div>
              <button type="submit" onClick={e => handleSubmit(e)} className="btn btn-primary w-75">Login</button>
            </form>
        </div>
    )
    
    if(context.user?.uid) { 
      return <Redirect to="/Dashboard" />
    }
    return (
        <React.Fragment>
          { BuildUIForm() }
        </React.Fragment>
    )
}

export default Register
