import { useState } from 'react';
const driver = require('../assets/driver.jpg');
const user = require('../assets/user.jpg');

function Home({ userType, setUserType, setFormType }) {

    return (
        <div className='col'>
            <h2>Select User Type</h2>
            <div className='row'>
                <div onClick={() => setUserType('Driver')} style={{ display: 'flex', margin: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={driver} style={{ width: 140, marginBottom: 10, borderRadius: 10 }} />
                    <h4>Driver</h4>
                    <input type={'radio'} checked={userType === "Driver"} />
                </div>
                <div onClick={() => setUserType('User')} style={{ display: 'flex', margin: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={user} style={{ width: 180, marginBottom: 10, borderRadius: 10 }} />
                    <h4>User</h4>
                    <input type={'radio'} checked={userType === "User"} />
                </div>
            </div>
            <input type={'button'} value={'Login'} className='btn' onClick={() => setFormType('login')} />
            or
            <input type={'button'} value={'Register'} className='btn' onClick={() => setFormType('register')} />
        </div>
    )
}

export default Home;
