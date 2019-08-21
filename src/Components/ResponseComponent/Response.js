import React from 'react';
import { connect } from 'react-redux';
import './Response.css';

const Response = ({ globalResponse }) => {
  const getStatus = () => {
    if(globalResponse.status !== 200 && globalResponse.status !== 201) return 'error';
    return 'success'; 
  }
  return (
    <div className={getStatus()} id={globalResponse.errorState}>
      {
        globalResponse.isGlobalResponse
          ? 
          <p className={globalResponse.errorState}>{globalResponse.message}</p>
          : 
          <p className='non-active'></p>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  globalResponse: state.responseReducer
});

export default connect(mapStateToProps)(Response);
