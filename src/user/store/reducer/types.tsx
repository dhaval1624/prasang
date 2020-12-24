export interface IUsers {
    userList: any[],
    error:"",
    loading:false,
}

export interface IAuth {
    userList: any[],
    user:null,
    token:null,
    userId:string,
    loading:false,
    error:""
}