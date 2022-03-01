import { useState } from "react"
import { getDrives, getUsers, setDrives, setUsers } from "../util/CommonFunction"


const RegisterForm = ({ userType, handleBack }) => {
    const [userid, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [cabNumber, setCabNumber] = useState('')

    const handleRegisterClick = () => {
        if (userType === 'Driver') {
            let deriver = getDrives()
            deriver.push({
                _id: userid,
                _name: userName,
                cab_number: cabNumber,
                is_online: false
            })
            setDrives(deriver)
        } else {
            let users = getUsers();
            users.push({
                _id: userid,
                _name: userName,
            })
            setUsers(users)
        }
        alert(`${userType} Register Successfully!!`)
        setUserId('');
        setUserName('');
        setCabNumber('');
    }

    return (
        <div className="col">
            <h2>Register {userType}</h2>
            <label>{userType} Id</label>
            <input className="inputbox" type={'text'} placeholder={`Enter ${userType} id here..`} value={userid} onChange={e => setUserId(e.target.value)} />
            < input className="inputbox" type={'text'} placeholder={`Enter ${userType} Name`} value={userName} onChange={e => setUserName(e.target.value)} />
            {
                userType === 'Driver' &&
                <input className="inputbox" type={'text'} placeholder={`Enter cab Number here..`} value={cabNumber} onChange={e => setCabNumber(e.target.value)} />
            }
            <input type={'button'} value={'Register'} className='btn' onClick={handleRegisterClick} />
            <input type={'button'} value={'Back'} className='btn' onClick={handleBack} />
        </div>
    )
}


export default RegisterForm