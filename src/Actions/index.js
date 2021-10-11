export const UserSignIn=()=>{
 return{
    type: "SignIn",
 }
}

export const userRegister=()=>{
    return{
        type:"userRegistered",
    }
}

export const UserInfo=(info)=>{
  return{
      type:"userinfo",
      payload:info
  }
}