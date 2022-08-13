
import { BrowserRouter, Route, Routes,Router,IndexRoute } from "react-router-dom";
import LoginPage from './page/LoginPage';
import React from "react";
import ChatRoom from './page/ChatRoom';

function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<LoginPage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
    </Routes > 
    </BrowserRouter>
  //   <BrowserRouter>
  
      
     
     

  // </BrowserRouter>
    //   <Router >
    //   <Route path = "/" component = {LoginPage}>
    //     <Route path = "loginpage" component = {LoginPage} />
    //     <Route path = "chatroom" component = {ChatRoom} />
    //   </Route>
    // </Router>
  );
}

export default App;
