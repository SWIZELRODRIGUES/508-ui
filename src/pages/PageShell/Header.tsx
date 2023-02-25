import React from 'react';
import './styles/Header.scss';
import log from '../../assets/persistentLogo.svg';
import logo from '../../assets/508.png';
function Header() {
  return (
     <nav className="navbar navbar-inverse">
       <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img src={log} alt="Logo" />
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <img src={logo} alt="Logo" width='80' height='34'/>
           
          </a>
        </div>
        <div className="nav navbar-nav navbar-right">
          Logged in : Shivam Naik
        </div>
       </div>
     </nav>
   );
}

export default Header;
