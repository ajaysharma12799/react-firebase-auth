import React from 'react'
import Header from '../components/Header'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="parent">
                <div className="card w-50 mt-5 mb-5">
                    <div className="card-title text-center display-6">Welcome to Authentication Application</div>
                    <div className="card-text text-center lead">This Authentication Application Contain Implementation of Various Authentication Method Using Firebase and React</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
