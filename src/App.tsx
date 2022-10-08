import React from 'react';
// import './App.css';
import "./css/styles/App.scss"
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/SidebarDetails/Sidebar';
function App() {

  return (
    <>
      {/* <Login/> */}
      <Navbar/>
      <Sidebar/>
    </>
  );
}

export default App;
