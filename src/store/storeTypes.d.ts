export interface user {
    userId: string,
    name: string,
    email: string,
    username: string,
    contactNo?: string,
    image?: string
}

export type initialAuthState = {
    userList?: [user],
    user?:user,
    token?:string,
    error?:string
}

export type store = {
    auth: initialAuthState
}