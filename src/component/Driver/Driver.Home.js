import { useState } from "react"


const DriverHome = ({ user, handleLogout }) => {
    const [isON, setIsON] = useState(true);

    return (
        <div className="row">
            <h2>Welcome {user._name}!</h2>
            <input type={'button'} value={isON ? 'Set Off' : "Set On"} className='btn' onClick={() => setIsON(!isON)} />
            <input type={'button'} value={'Logout'} className='btn' onClick={handleLogout} />
        </div>
    )
}


export default DriverHome