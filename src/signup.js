
import React,{useState} from "react";
import { Layout,Row,Col,Card,Form,Input,Checkbox,Button } from 'antd';
import {register_with_firebase} from"./firebase";
import {Link,useHistory} from "react-router-dom";
import { Typography } from 'antd';
import {Redirect} from "react-router";
import { useSelector,useDispatch } from 'react-redux';
import {userRegister} from "./Actions";
const { Title } = Typography;


const SignUp = () => {
  const history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();


  const check_sign_in=(e)=>{
    
      console.log("email",email);
      console.log("password",password);
      let user_info=register_with_firebase(email, password);
      console.log("user_info",user_info);
      dispatch(userRegister());
      //   history.push("/sign-in");
    
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
  return (
    <Card>
        <Form onFinish={check_sign_in} validateMessages={validateMessages}>
        <Row>
            <Col md={24}>
            <Title>Register User</Title>
            </Col>
        </Row>
        <Row>
            <Col md={24}>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                { type: 'email', required: true, message: 'Please Enter Email' },
                ]}
            >
                <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please Enter password!' }]}
            >
                <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 1, span: 4 }}>
                <Button
                // onClick={() => check_sign_in(email, password)}
                type="primary"
                htmlType="submit"
                >
                Register
                </Button>
            </Form.Item>
            <Form.Item>
                Already Registered ? <Link to="/sign-in"> Sign In</Link>
            </Form.Item>
            </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default SignUp
