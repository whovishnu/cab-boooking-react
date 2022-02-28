import { useState } from "react"


const RegisterForm = ({ userType, handleBack }) => {
    const [userid, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [cabNumber, setCabNumber] = useState('')

    const handleRegisterClick = () => {
        if (userType === 'Driver') {
            let deriver = localStorage.getItem('drivers') || '[]';
            deriver = JSON.parse(deriver);

            deriver.push(
                {
                    _id: userid,
                    _name: userName,
                    cab_number: cabNumber
                }
            )

            localStorage.setItem('drivers', JSON.stringify(deriver))
        } else {
            let users = localStorage.getItem('users') || '[]';
            console.log(localStorage.getItem('users'), users)
            users = JSON.parse(users);

            users.push(
                {
                    _id: userid,
                    _name: userName,
                }
            )

            localStorage.setItem('users', JSON.stringify(users))
        }
        alert(`${userType} Register Successfully!!`)
        setUserId('');
        setUserName('');
        setCabNumber('');
    }

    return (
        <div className="row">
            <h2>Register {userType}</h2>
            <label>{userType} Id</label>
            <input className="inputbox" type={'text'} placeholder={`Enter ${userType} id here..`} value={userid} onChange={e => setUserId(e.target.value)} />
            < input className="inputbox" type={'text'} placeholder={`Enter ${userType} Name`} value={userName} onChange={e => setUserName(e.target.value)} />
            {
                userType === 'Driver' &&
                <input className="inputbox" type={'text'} placeholder={`Enter ${userType} id here..`} value={cabNumber} onChange={e => setCabNumber(e.target.value)} />
            }
            <input type={'button'} value={'Register'} className='btn' onClick={handleRegisterClick} />
            <input type={'button'} value={'Back'} className='btn' onClick={handleBack} />
        </div>
    )
}


export default RegisterForm