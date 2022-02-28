import { useState } from "react"


const UserHome = ({ user, handleLogout }) => {
    const [selectDestinationX, setSelectDestinationX] = useState('')
    const [selectDestinationY, setSelectDestinationY] = useState('')
    const [destinationDistance, setDestinationDistance] = useState(null)
    const [cabBook, setCabBook] = useState(null)

    const SearchCab = () => {
        if (selectDestinationX !== "" && selectDestinationY !== "") {
            let DestinationDistance = Math.sqrt(
                (user.currentX - selectDestinationX) * (user.currentX - selectDestinationX)
                + (user.currentY - selectDestinationY) * (user.currentY - selectDestinationY))
            let deriver = localStorage.getItem('drivers') || '[]';
            deriver = JSON.parse(deriver);

            deriver = deriver.filter(item => item.is_online)

            if (deriver.length) {
                deriver = deriver.map(item => {
                    let distance = Math.sqrt(
                        (item.currentX - selectDestinationX) * (item.currentX - selectDestinationX)
                        + (item.currentY - selectDestinationY) * (item.currentY - selectDestinationY))

                    return ({ ...item, distance: parseInt(distance) })
                })

                deriver.sort((a, b) => a.distance - b.distance);

                if (deriver.length) {
                    setCabBook(deriver[0])
                }
            }

            setDestinationDistance(parseInt(DestinationDistance));
        }
    }

    return (
        <div className="col">
            <h2>Welcome {user._name}!</h2>
            <label>Current Location (X,Y) : ({user.currentX}, {user.currentY})</label>
            {
                cabBook ?
                    <>
                        <label>Cab Number : {cabBook.cab_number}</label>
                        <label>Driver Name : {cabBook._name}</label>
                        <label>Cab Distance : {cabBook.distance}</label>
                        {destinationDistance && "Destination Distance : " + destinationDistance}
                    </>
                    :
                    <>
                        <label>Select Destination</label>
                        <input className="inputbox" type={'text'} placeholder={`Enter Destination X here..`} value={selectDestinationX} onChange={e => setSelectDestinationX(e.target.value)} />
                        <input className="inputbox" type={'text'} placeholder={`Enter Destination Y here..`} value={selectDestinationY} onChange={e => setSelectDestinationY(e.target.value)} />
                        <input type={'button'} value={'Search Cab'} className='btn' onClick={SearchCab} />
                    </>
            }
            <input type={'button'} value={'Logout'} className='btn' onClick={handleLogout} />
        </div>
    )
}


export default UserHome