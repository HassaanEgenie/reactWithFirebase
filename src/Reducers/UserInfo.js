
export const SignIn=(state=false,action)=>{
   switch(action.type){
      case"SignIn":
          return state=true;
      break;
      default:
          return state;
      break;
   }
}

export const Register=(state=false,action)=>{
  switch(action.type){
      case "userRegistered":
         return state=true;
      break;
      default:
         return state;
      break;
  }
}

export const UserInfo=(state={},action)=>{
  switch(action.type){
    case"userinfo":
     return state=action.payload;
    break;
    default:
     return state;
    break
  }
}