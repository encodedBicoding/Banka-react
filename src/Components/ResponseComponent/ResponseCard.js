import React from 'react';
import { connect } from 'react-redux';
import './Response.css';

const ResponseCard = ({body, dispatch}) => {
  const closeResponse = () => {
    dispatch({ type: 'CLOSE_MODAL'});
    window.location.reload();
  }

  const formatBodyData = (obj) => {
    return (
      Object.keys(obj).map((data, idx) => (
        <div key={idx} className="response-body">
          <p className="response-item">
            { data }: {'  '}{ obj[data]}
          </p>
        </div>
      ))
    )
  }

  return (
    <div className="response-container">
      {
        formatBodyData(body)
      }
      <button onClick={closeResponse}>Ok</button>
    </div>
  )
}

export default connect()(ResponseCard);
