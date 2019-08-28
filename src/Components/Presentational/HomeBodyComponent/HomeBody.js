import React from 'react';
import { connect } from 'react-redux'
import { showSignupModal } from '../../../Actions/modalActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import About from './About';
import Contact from './Contact';
import './HomeBody.css';

const HomeBody = ({dispatch}) => {
  return (
    <div className="homebody-container">
      <div className="top-container">
        <div className="overlay"></div>
        <div className="body-top-absolute">
          <h1>Join{' '}
            <ins>us</ins>
          </h1>
          <h4>for the best online banking service:</h4>
          <ul>
            <li>Eazi Bank Account creation</li>
            <li>Get Instant transaction details</li>
            <li>Utility Bills Payment</li>
          </ul>
          <button onClick={()=>showSignupModal(dispatch)}>Get Started</button>
        </div>
        <FontAwesomeIcon 
          icon={faAngleDoubleDown} 
          style={{ 
            backgroundColor: '#FF8C00', 
            fontSize: 20 + 'px', 
            padding: 10+'px',
            position: 'relative',
            bottom: 0,
            left: 50+'%',
            borderRadius: 45+'%',
            cursor: 'pointer'
          }}/>
        <img src='./images/undraw_working_remotely_jh40.svg'/>
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default connect()(HomeBody);
