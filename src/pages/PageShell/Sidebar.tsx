import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {
  return (
    <div style={{
      display: 'flex', height: '100vh', position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100px',
      zIndex: 999
    }}>
      <CDBSidebar className='' textColor="#fff" backgroundColor="#333" breakpoint={720}
        minWidth="80px" maxWidth='300px' toggled={true}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            FiveO8
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="table">My Previous Runs</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="question-circle">Acessibility Help</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="envelope">Contact Us</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter >
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Equal Access
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>

    </div>
  );
};

export default Sidebar;
