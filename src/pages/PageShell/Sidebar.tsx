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
    <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 999 }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" isOpen={isSidebarOpen}>
        <CDBSidebarHeader>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <i className="fas fa-universal-access fa-lg" style={{ marginRight: '15px' }} onClick={toggleSidebar}></i> FiveO8
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* <NavLink exact to="/" activeClassName="activeClicked"> */}
              <CDBSidebarMenuItem icon="columns" selected={selected === 0} onClick={() => handleSelect(0)}>Home</CDBSidebarMenuItem>
            {/* </NavLink> */}
            {/* <NavLink exact to="/tables" activeClassName="activeClicked"> */}
              <CDBSidebarMenuItem icon="table" selected={selected === 1} onClick={() => handleSelect(1)}>My Previous Runs</CDBSidebarMenuItem>
            {/* </NavLink> */}
            {/* <NavLink exact to="/profile" activeClassName="activeClicked"> */}
              <CDBSidebarMenuItem icon="user" selected={selected === 2} onClick={() => handleSelect(2)}>Profile</CDBSidebarMenuItem>
            {/* </NavLink> */}
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked"> */}
              <CDBSidebarMenuItem icon="chart-line" selected={selected === 3} onClick={() => handleSelect(3)}>Analytics</CDBSidebarMenuItem>
            {/* </NavLink> */}
            {/* <NavLink exact to="/help" activeClassName="activeClicked"> */}
              <CDBSidebarMenuItem icon="question-circle" selected={selected === 4} onClick={() => handleSelect(4)}>Accessibility Help</CDBSidebarMenuItem>
            {/* </NavLink> */}
            {/* <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked"> */}
              <CDBSidebarMenuItem icon="envelope" selected={selected === 5} onClick={() => handleSelect(5)}>Contact Us</CDBSidebarMenuItem>
            {/* </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center', fontSize: '1.1rem' }}>
          <div style={{ padding: '10px 3px' }}>
            <em style={selected === 4 ? { borderBottom: '1px solid #fff' } : null}>"Accessibility is not a feature,<br/>it is a human right."</em>
          </div>
          <div style={{ marginTop: '6px' }}>
            <strong>Equal Access</strong>
          </div>
          <div style={{ marginBottom: '5px' }}></div>
        </CDBSidebarFooter>
      </CDBSidebar>

    </div>
  );
};

export default Sidebar;
