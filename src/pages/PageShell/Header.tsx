import React from 'react';
import './styles/Header.scss';
// import pslLogo from '../../assets/persistentLogo.svg';
// import five08Logo from '../../assets/FiveO8Logo.png';

function Header() {
    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {/* <a className="navbar-brand" href="#">
                            <span className="persistentLogo"><img src={pslLogo} alt="PersistentLogo" /></span>
                            <span><img src={five08Logo} alt="Fiveo8Logo" width="100" /></span>
                        </a> */}
                    </div>
                    <div className="nav navbar-nav navbar-right">
                    John Doe
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
