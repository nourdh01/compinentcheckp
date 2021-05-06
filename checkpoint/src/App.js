import React from "react";
import './App.css'; 
import MyFirstComponent from "./component/profile/ProfilePhoto";
import FullNameComponent from "./component/profile/FullName";
import AdressComponent from "./component/Address";


function App() {
  return (
    <div className="App">
    <MyFirstComponent/> 
    <FullNameComponent/>
    <AdressComponent/>
    </div>
  );
}

export default App;
