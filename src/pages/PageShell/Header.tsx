import React from 'react';
import './styles/Header.scss';
// import pslLogo from '../../assets/persistentLogo.svg';
// import five08Logo from '../../assets/FiveO8Logo.png';

function Header() {
    return (
        <>
            <nav className="navbar navbar-inverse"  >
                <div className="container-fluid">
                    <div className="navbar-header">
                        
                        {<a className="navbar-brand" href="#">
    <span className="ms-Icon ms-Icon--WaffleOffice365"></span>
</a>
}
                    </div>
                    <div className="nav navbar-nav navbar-right">
                    Logged in : Shivam Naik
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
