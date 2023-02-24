import React from 'react';
import './styles/Header.scss';
import log from '../../assets/persistentLogo.svg';

function Header() {
  return (
     <nav className="navbar navbar-inverse">
       <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img src={log} alt="Logo" width="100" height="100" />
            <span> FiveO8</span>
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
