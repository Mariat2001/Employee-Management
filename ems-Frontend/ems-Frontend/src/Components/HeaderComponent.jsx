import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-dark bg-dark'>
          <a className="navbar-brand" href="#">Employee Management System</a>
          <div >
            <FontAwesomeIcon style={{color:'white',marginRight: '30px'}} icon={faFacebook} />
            <FontAwesomeIcon style={{color:'white',marginRight: '30px'}} icon={faLinkedin} />
            <FontAwesomeIcon style={{color:'white',marginRight: '30px'}} icon={faInstagram} />
            <FontAwesomeIcon style={{color:'white',marginRight: '30px'}} icon={fasEnvelope} />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
