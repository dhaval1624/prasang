import { TOKEN_NAME } from '../../utils/Constants'

export const checkAutoAuth = () => {
    let token = localStorage.getItem(TOKEN_NAME);
    if(!token) throw new Error("token not found!");
    return token;
}

export const setToken = (token: string) => {
    localStorage.setItem(TOKEN_NAME, token);
}