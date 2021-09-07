import React from 'react'
import Header from '../components/header/Header'

const Register = () => {
    const BuildUIForm = () => (
        <div>
          <Header />
            <form className="mt-5 mb-5 w-50">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Username*" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email*" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password*" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    )

    return (
        <React.Fragment>
          {BuildUIForm()}
        </React.Fragment>
    )
}

export default Register
