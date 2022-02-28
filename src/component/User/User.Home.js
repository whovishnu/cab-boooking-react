import { useState } from "react"


const UserHome = ({ user, handleLogout }) => {
    const [selectDestination, setSelectDestination] = useState('')

    return (
        <div className="row">
            <h2>Welcome {user._name}!</h2>
            <label>Select Destination</label>
            <input className="inputbox" type={'text'} placeholder={`Enter Destination here..`} value={selectDestination} onChange={e => setSelectDestination(e.target.value)} />
            <input type={'button'} value={'Search Cab'} className='btn' />
            <input type={'button'} value={'Logout'} className='btn' onClick={handleLogout} />
        </div>
    )
}


export default UserHome