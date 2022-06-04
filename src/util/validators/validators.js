export const required = (value) => {
    if (!value){
       return 'required'
    }
    return undefined
}

export const maxElementLength = (maxLength) => (value) =>{
    if (value.length > maxLength) return `Max length is ${maxLength} symbol`
    return undefined
}