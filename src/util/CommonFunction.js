export const getRandomXY = () => {
    const currentX = parseInt(Math.random() * 100);
    const currentY = parseInt(Math.random() * 100);
    return { currentX, currentY }
}

export const calculateDistance = (x, x1, y, y1) => {
    return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1))
}

export const getDrives = () => {
    let deriver = localStorage.getItem('drivers') || '[]';
    return JSON.parse(deriver);
}

export const getUsers = () => {
    let users = localStorage.getItem('users') || '[]';
    return JSON.parse(users);
}
export const setDrives = (drivers) => {
    localStorage.setItem('drivers', JSON.stringify(drivers))
}

export const setUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users))
}