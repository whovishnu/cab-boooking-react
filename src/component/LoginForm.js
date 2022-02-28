import { useState } from "react"


const LoginForm = ({ userType, handleBack, handleLogin }) => {
    const [userid, setUserId] = useState('')

    const handleClick = () => {
        let userExist = {};
        let userList = [];

        if (userType === 'Driver') {
            userList = localStorage.getItem('drivers') || '[]';
        } else {
            userList = localStorage.getItem('users') || '[]';
        }

        userList = JSON.parse(userList);
        userExist = userList.filter(item => item._id === userid)
        userExist.length > 0 &&
            handleLogin(userExist[0])
    }

    return (
        <div className="row">
            <h2>Login {userType}</h2>
            <label>{userType} Id</label>
            <input className="inputbox" type={'text'} placeholder={`Enter ${userType} id here..`} value={userid} onChange={e => setUserId(e.target.value)} />
            <input type={'button'} value={'Login'} className='btn' onClick={handleClick} />
            <input type={'button'} value={'Back'} className='btn' onClick={handleBack} />
        </div>
    )
}


export default LoginForm