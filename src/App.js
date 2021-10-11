
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";


import 'antd/dist/antd.css';
import { Row,Col } from 'antd';
import { Typography } from 'antd';
import Routes from './Routes';

const { Title } = Typography;

// import { getAuth , onAuthStateChanged,signInWithEmailAndPassword  } from "firebase/auth";

function App() {

  return (
    <Router>
         
              <Routes />
           
    </Router>
  );
}

export default App;
