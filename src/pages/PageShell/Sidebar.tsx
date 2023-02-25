//@ts-nocheck
import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import log from '../../assets/persistentLogo.svg';
import logo from '../../assets/508.png';
const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div style={{ position: 'fixed', top: -43, left: 0, bottom: 0, zIndex: 9 ,paddingBottom:0}}>
      <CDBSidebar className='sidebar-wrapper' textColor="#323130" backgroundColor="#fff" isOpen={isSidebarOpen}>
        <CDBSidebarHeader className="sidebar-header">
       <div></div>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}><div><img src={log} alt="Logo" width="fit-content" height="fit-content"  /></div>
        
  
</a>
{/* <img src="C:\Users\kevin_peter\Documents\semicolon\508-ui\src\assets\508.png" alt="Icon" style={{ width: '200px', height: '200px', marginRight: '16px' }} onClick={toggleSidebar} /> */}
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidebar-menu-item" icon="home" selected={selected === 0} onClick={() => handleSelect(0)} >Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidebar-menu-item" icon="table" selected={selected === 1} onClick={() => handleSelect(1)}>My Previous Runs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidebar-menu-item" icon="user" selected={selected === 2} onClick={() => handleSelect(2)}>Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidebar-menu-item" icon="chart-line" selected={selected === 3} onClick={() => handleSelect(3)}>Analytics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/help" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidebar-menu-item" icon="question-circle" selected={selected === 4} onClick={() => handleSelect(4)}>Accessibility Help</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidebar-menu-item" n icon="envelope" selected={selected === 5} onClick={() => handleSelect(5)}>Contact Us</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <div className='border'></div>
        <CDBSidebarFooter style={{ textAlign: 'center', fontSize: '1.1rem',paddingTop:25,paddingBottom:20 }}>
          <div style={{ padding: '4px 4px' }}>
            <em style={selected === 4 ? { borderBottom: '1px solid #fff' } : null}>"Accessibility is not a feature,<br/>it is a human right."</em>
          </div>
          <div style={{ marginTop: '5px' }}>
            <strong>Equal Access</strong>
          </div>
          <div style={{ marginBottom: '20px' }}></div>

        </CDBSidebarFooter>
      </CDBSidebar>

    </div>
  );
};

export default Sidebar;
