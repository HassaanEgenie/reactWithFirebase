import React from "react";
import { Redirect, Route } from "react-router-dom";


const ProtectedRoutes=({component:Component,...restOfProps})=>{
    
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));
  console.log("this", isAuthenticated);
 
    return(
       
            <Route
            {...restOfProps}
             render={(props) =>{
             
                if(isAuthenticated===true){
                  console.log("true auth");
                  return <Component {...props} />
                }else{
                  console.log("false auth");
                  return <Redirect to="/sign-in"/>
                }
             }
              
            }
          />
        
        
    );
}

export default ProtectedRoutes;