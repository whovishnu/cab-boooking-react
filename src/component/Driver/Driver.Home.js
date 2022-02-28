import { useState } from "react"


const DriverHome = ({ user, handleLogout }) => {
    const [isON, setIsON] = useState(true);

    const handleClick = () => {
        let currentX = 0, currentY = 0;

        if (!isON) {
            currentX = parseInt(Math.random() * 100);
            currentY = parseInt(Math.random() * 100);
        }
        let deriver = localStorage.getItem('drivers') || '[]';
        deriver = JSON.parse(deriver);

        deriver = deriver.map(item => {
            if (item._id === user._id) {
                return ({
                    ...item,
                    is_online: !isON,
                    currentX,
                    currentY
                })
            } else {
                return item
            }
        })
        localStorage.setItem('drivers', JSON.stringify(deriver))
        setIsON(!isON)
    }

    return (
        <div className="col">
            <h2>Welcome {user._name}!</h2>
            <p>Cab Number : {user.cab_number}</p>
            <input type={'button'} value={isON ? 'Set Off' : "Set On"} className='btn' onClick={handleClick} />
            <input type={'button'} value={'Logout'} className='btn' onClick={handleLogout} />
        </div>
    )
}


export default DriverHome