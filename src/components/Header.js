import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';

const Header = () => {
  const context = useContext(UserContext);

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
    .then((response) => {
     toast.success("Logout Successfull") ;
    })
    .catch((error) => {
      console.error(error);
      toast.error(error.message);
    });
  }

    const buildUI = () => (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">React Authentication</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                  {
                    context.user ? (
                      <React.Fragment>
                        <li className="text-white nav-item pe-2 user-name">
                          {context.user?.email ? context.user.email : ""}
                        </li>
                        <li className="nav-item pe-2">
                          <button className='text-white logout-button' onClick={e => {
                            handleSignout();
                            context.setUser(null);
                          }}>Logout</button>
                        </li>
                      </React.Fragment>
                      ) : (
                      <React.Fragment>
                        <li className="text-white nav-item pe-2">
                          <Link to="/">Home</Link>
                        </li> 
                        <li className="text-white nav-item pe-2">
                          <Link to="/Login">Login</Link>
                        </li>
                        <li className="text-white nav-item pe-2">
                          <Link to="/Register">Register</Link>
                        </li>
                      </React.Fragment>
                    )
                  }
                </ul>
              </div>
            </div>
          </nav>
      </div>
    )

    return (
        <React.Fragment>
            {buildUI()}
        </React.Fragment>
    )
}

export default Header
