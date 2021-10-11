import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link, useHistory ,BrowserRouter} from "react-router-dom";
import { getAuth, onAuthStateChanged ,signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// import {signin_with_firebase,check_signin} from"./firebase";
import 'antd/dist/antd.css';
import { Layout,Row,Col,Card,Form,Input,Checkbox,Button } from 'antd';
import { Typography } from 'antd';
import {useDispatch,useSelector} from "react-redux";
import {UserSignIn,UserInfo} from "./Actions";
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;




// import { getAuth , onAuthStateChanged,signInWithEmailAndPassword  } from "firebase/auth";

function SignIn() {
  const auth=getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  // const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const dispatch =useDispatch();
  const user_obj =useSelector(state=>state.UserInfo);
  console.log(user_obj);
 
  var authentication=localStorage.getItem("isAuthenticated");
 // console.log("authentication",authentication);
  
 //Youtube API Key     AIzaSyB3RT854pKnimj_zHZfzJTSDQ1w0Es0zPk;
   async function signin_with_firebase(email, password){
      try{
          let user= await signInWithEmailAndPassword(auth, email, password);
          const user_information={
            accessToken:user.accessToken,
            email:user.email,
            uid:user.uid,
            emailVerified:user.emailVerified,
          }
          localStorage.setItem("isAuthenticated",true);
          dispatch(UserInfo(user_information));
          console.log("user found");
          history.push("/home");
        }catch(error){
              localStorage.setItem("isAuthenticated",false);
              console.log("user not found",error);
              alert("Enter the correct Email and Password");
        }
  }


  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
   const check_sign_in=(e)=>{
   
     signin_with_firebase(email, password);
    //  check_signin();
    
 }

 

  return (
    
         
              <Card>
                  <Form onFinish={check_sign_in} validateMessages={validateMessages}>
                <Row>
                  <Col md={24}>
                     <Title >Sign In</Title>
                  </Col>
                </Row>
                <Row>
                  <Col md={24}>
                  <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ type:"email",required: true }]}
                    >
                      <Input onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true }]}
                    >
                      <Input.Password onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 1, span: 4 }}>
                      <Button  type="primary" htmlType="submit">
                        Sign In
                      </Button>
                    </Form.Item>
                   
                    </Col>
                </Row>
                </Form>
              </Card>
           
    
  
  );
}

export default SignIn;
