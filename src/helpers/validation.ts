export const onlyLettersAndNumbers = (str: string) => {
    return /^(?:[a-zA-Z0-9_ ]+)?$/.test(str);
}

export const passwordCheck = (password: string, repPassword: string, username: string ) => {
    if( password !== repPassword ){
        return "Slaptazodziai turi sutapti!"
    }
    const pswCheck = partialPasswordCheck(password, username)
    if(pswCheck !== "") return pswCheck
    return ""
}

export const partialPasswordCheck = (password: string, username: string ) => {
    if(/\s/.test(password)){
        return "Slaptazodis negali tureti tarpu!"
    }else if (username.toLowerCase() === password.toLowerCase()){
        return "Slaptazodis negali buti toks pat kaip vartotojas!"
    }
    return ""
}