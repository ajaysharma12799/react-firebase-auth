import React from 'react'
import Header from '../components/header/Header'

const Dashboard = () => {
    const buildUI = () => (
        <div>
            <Header/>
            Working Dashboard
        </div>
    )
    return (
        <React.Fragment>
            {buildUI()}
        </React.Fragment>
    )
}

export default Dashboard
