import { useEffect, useState } from 'react';
import './App.css';
import DriverHome from './component/Driver/Driver.Home';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import UserHome from './component/User/User.Home';
const driver = require('./assets/driver.jpg');
const user = require('./assets/user.jpg');

function App() {
  const [userType, setUserType] = useState('')
  const [formType, setFormType] = useState('')
  const [userLogin, setUserLogin] = useState({})
  const [driverLogin, setDriverLogin] = useState({})


  return (
    <div className="App">
      <header className="App-header">
        {userLogin._id ? <UserHome user={userLogin} handleLogout={() => setUserLogin({})} />
          : driverLogin._id ? <DriverHome user={driverLogin} handleLogout={() => setDriverLogin()} /> :
            formType === 'login' ?
              <LoginForm userType={userType} handleLogin={userType === "User" ? setUserLogin : setDriverLogin} handleBack={() => setFormType('')} />
              : formType === 'register' ?
                <RegisterForm userType={userType} handleBack={() => setFormType('')} />
                : <div>
                  <h2>Select User Type</h2>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div onClick={() => setUserType('Driver')} style={{ display: 'flex', margin: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <img src={driver} style={{ width: 140, marginBottom: 10, borderRadius: 10 }} />
                      <input type={'radio'} checked={userType === "Driver"} />
                    </div>
                    <div onClick={() => setUserType('User')} style={{ display: 'flex', margin: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <img src={user} style={{ width: 180, marginBottom: 10, borderRadius: 10 }} />
                      <input type={'radio'} checked={userType === "User"} />
                    </div>
                  </div>
                  <input type={'button'} value={'Login'} className='btn' onClick={() => setFormType('login')} />
                  or
                  <input type={'button'} value={'Register'} className='btn' onClick={() => setFormType('register')} />
                </div>}
      </header>
    </div>
  )
}

export default App;
