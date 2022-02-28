import { useEffect, useState } from 'react';
import './App.css';
import DriverHome from './component/Driver/Driver.Home';
import Home from './component/Home';
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

  const handleLogout = () => {
    setUserLogin({})
    setDriverLogin({})
    setUserType('')
    setFormType('')
  }

  return (
    <div className="App">
      <header className="App-header">
        {userLogin._id ? <UserHome user={userLogin} handleLogout={handleLogout} />
          : driverLogin._id ? <DriverHome user={driverLogin} handleLogout={handleLogout} /> :
            formType === 'login' ?
              <LoginForm userType={userType} handleLogin={userType === "User" ? setUserLogin : setDriverLogin} handleBack={() => setFormType('')} />
              : formType === 'register' ?
                <RegisterForm userType={userType} handleBack={() => setFormType('')} />
                : <Home setUserType={setUserType} userType={userType} setFormType={setFormType} />
        }
      </header>
    </div>
  )
}

export default App;
