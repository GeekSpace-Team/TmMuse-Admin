import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/loginPage/LoginPage';
import SidebarDesign from './components/sidebar/Sidebar/SidebarDesign';
import Index from './components/sidebar/index/Index';
import Dashboard from './components/sidebar/dashboard/Dashboard';


function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/dashboard" element={<SidebarDesign/>}/>
            <Route exact path="/profile" element={<SidebarDesign/>} />
            <Route exact path="/banner" element={<SidebarDesign/>} />
            <Route exact path="/category" element={<SidebarDesign/>} />
            <Route exact path="/ads" element={<SidebarDesign/>} />
            <Route exact path="/inbox" element={<SidebarDesign/>} />
            <Route exact path="/post" element={<SidebarDesign/>} />
            <Route exact path="/sertificate" element={<SidebarDesign/>} />
            <Route exact path="/promoCode" element={<SidebarDesign/>} />
            <Route exact path="/users" element={<SidebarDesign/>} />
            <Route exact path="/push" element={<SidebarDesign/>} />
            <Route exact path="/pop" element={<SidebarDesign/>  } />
            <Route exact path="/constants" element={<SidebarDesign/>} />
            <Route exact path="/interests" element={<SidebarDesign/>} />
            <Route exact path="/first" element={<SidebarDesign/>} />
            <Route exact path="/tags" element={<SidebarDesign/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
