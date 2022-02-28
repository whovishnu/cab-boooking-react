import { useState } from "react"
import { getDrives, getRandomXY, setDrives } from "../../util/CommonFunction";


const DriverHome = ({ user, handleLogout }) => {
    const [isON, setIsON] = useState(true);

    const handleClick = () => {

        const { currentX, currentY } = getRandomXY();
        let deriver = getDrives()

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
        
        setDrives(deriver)
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