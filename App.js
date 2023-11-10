
import React from "react";
import Login from "./components/Login";
import "./styles/app.css";
import Register from "./components/Register";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div className="App">
      <Profile/>
           {/* <div style={{height:"100vh",display:"flex",alignItems:"center"}}>
           <Login/>
           <Register/>
           </div> */}
         {/* <Home/>       */}
    </div>
  );
}

export default App;
