import React, { useState } from "react";
import { getAuth , signOut } from "firebase/auth";
import {useHistory} from "react-router-dom";
import {UserInfo} from "./Actions";
import {useDispatch} from "react-redux";
import Videoplayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { Layout, Menu, Breadcrumb,Form,Input,Button,Card,Row,Col,Image} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Youtube from "./Youtube";
import Title from "antd/lib/skeleton/Title";

const { Header, Content, Footer ,Sider } = Layout;
const { SubMenu } = Menu;
const Home=()=>{
    const history=useHistory();
    const dispatch =useDispatch();
    const auth=getAuth();
    const [searchWord,SetsearchWord]=useState("");
    const [totalVideos,Settotalvideos]=useState([]);
    const [videosMetaInfo,SetvideosMetaInfo]=useState([]);
    const [selectedVideoId,SetselectedVideoId]=useState(null);
    const [selected_video,Setselected_video]=useState({});
    const go_back=()=>{
  
    }
    const sign_out=()=>{
        signOut(auth).then(()=>{
            console.log("user is signed out");
            localStorage.setItem("isAuthenticated",false);
            dispatch(UserInfo({}));
            history.push("/sign-in");
        });
    }
   const search_video=(e)=>{
        const search=e.target.value;
        console.log("searchWord",search)
        SetsearchWord(search);
   }
  const form_submit= async(e)=>{
   
    const onSearch= await  Youtube.get("search",{
        params:{
            q:searchWord
        }
    });
     
     const videoslist=onSearch.data.items;
     console.log(videoslist);
     Settotalvideos(videoslist);
     Setselected_video(videoslist[0]);
     SetvideosMetaInfo(videoslist);
     SetselectedVideoId(videoslist[0].id.videoId);
     console.log("onSearch",videoslist);
     console.log("selected_video",selected_video);
     
  }

  const onVideoSelected=(videoId)=>{
    console.log("videoId",videoId);
    SetselectedVideoId(videoId)
  }
 return(
    <>
        {/* <h1>Home</h1>
        <button onClick={go_back}>Go back</button>
        <button onClick={sign_out}>Logout</button> */}
         <Layout>
            <Header className="header">
              
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item onClick={sign_out} key="1">Sign Out</Menu.Item>
                {/* <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
            </Header>
            <Layout>
            
            <Layout style={{ padding: '0 24px 24px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                  <Card>
                        <Form onFinish={form_submit}>
                            <Form.Item name="note" label="Search" >
                                <Input onChange={search_video} value={searchWord} placeholder="Enter Search Keyword"/>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                 </Card>
                 <Row>
                     <Col sm={24} md={16} >
                     <Videoplayer  videoId={selectedVideoId} />
                                {/* <iframe
                                    className="video-iframe"
                                    src={`https://www.youtube.com/embed/44-Kx5ZZTsY`}
                                    allowfullscreen
                                >
                               </iframe> */}
                        
                     </Col>
                     <Col sm={24} md={8}>
                        <Row>
                            <Col>
                            <VideoList
                                onVideoSelected={onVideoSelected}
                                data={videosMetaInfo}
                                />
                            </Col>
                        </Row>
                     </Col>
                 </Row>
                 
                </Content>
            </Layout>
            </Layout>
        </Layout>,
    </>
 )
  
}
export default Home;