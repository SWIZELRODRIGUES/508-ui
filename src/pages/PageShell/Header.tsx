import React from 'react';
import './styles/Header.scss';
// import log from '../../assets/persistentLogo.svg';
import log from '../../assets/PSL_Logo.png';
function Header() {
  return (
     <nav className="navbar navbar-inverse">
       <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img src={log} alt="Logo" width='35' height='35' />
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span >FiveO8</span>
           
          </a>
        </div>
        <div className="nav navbar-nav navbar-right">
          Log in
        </div>
       </div>
     </nav>
   );
}

export default Header;
