import React, {useContext} from 'react'
import Header from '../components/Header'
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const context = useContext(UserContext);

    const BuildUI = () => (
        <div>
            <Header/>
            <div className="text-center display-6 mt-5">Welcome to Dashboard</div>
        </div>
    )
    if(!context.user?.uid) {
        return <Redirect to="/Login" />
    }
    return (
        <React.Fragment>
            {BuildUI()}
        </React.Fragment>
    )
}

export default Dashboard
