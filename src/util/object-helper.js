export const updateObjectInArray = (item, itemId, objId, newPropsObj) => {
    return item.map(u => {
        if (u[objId] === itemId) {
            return {...u, ...newPropsObj}
        }
        return u
    })
}