import React, { useState, useEffect } from 'react';
import UserNavComponent from '../UserNavComponent/UserNavComponent';
import SideNav from '../SideNavComponent/SideNav';
import FormModal from '../../ModalComponents/FormModal';
import createBankAccount from './handleCreateAccount';
import { connect } from 'react-redux';
import './Account.css';

const CreateAccount = ({dispatch, isCreating, modal}) => {
  const [formFields, setFormFields] = useState({
    accType: 'current',
    owner: '',
  })
  const changeButtonText = (initial) => {
    return !isCreating ? initial : 'Please wait...'
  }
  const handleSetAccType = (e) => {
    setFormFields({
      ...formFields,
      accType: e.target.value
    })
  }
  const handleSetOwnerType = (e) => {
    setFormFields({
      ...formFields,
      owner: e.target.value
    })
  }
  const handleBankAccountCreation = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const data = {
      accType: formFields.accType,
      userType: formFields.owner
    }
    createBankAccount(
      'BANK_ACCOUNT_CREATE_LOADING', 
      data, 
      dispatch, 
      'BANK_ACCOUNT_CREATE_RESPONSE',
      'CREATE_ACCOUNT_MODAL'
    )
  }
  return (
    <div>
      <UserNavComponent />
      <SideNav />
      {
        modal === 'CREATE_ACCOUNT' ? <FormModal type='create_account'/> : false
      }
      <div className="user-pf-body">
        <div className="user-pf-content-body">
          <div className="user-pf-content">  
            <h3 className="user-pf-title">Add Account</h3>
            <form className="c-a-f" onSubmit={handleBankAccountCreation}> 
              <label htmlFor="select-type">Select type</label>
              <select name="select-type" className="user-pf-select" required defaultValue="current" onChange={handleSetAccType}>
                <option disabled>select any...</option>
                <option value="current">current</option>
                <option value="savings">savings</option>
              </select>
              <label htmlFor='user_type'>This account would serve?</label>
              <div className="user-type">
                <input type="radio" name="user_type" id="org" value="org" required onClick={handleSetOwnerType}/>{' '}
                <span>Organization</span>
              </div>
              <div className="user-type">
                <input type="radio" name="user_type" id="sme" value="sme" required onClick={handleSetOwnerType}/>{' '}
                <span>SME</span>
              </div>
              <div className="user-type">
                <input type="radio" name="user_type" id="per" value="personal" required onClick={handleSetOwnerType}/>{' '}
                <span>Personal</span>
              </div>
              <div className="acc-terms">
                <input type="checkbox" required/>{' '}
                <span>By creating an account, you agree to our <ins>Accounts terms and condition</ins></span>
              </div>
              <div className="acc-submit">
                <button type="submit">{changeButtonText('Create Account')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  isCreating: state.apiCallReducer.isCreatingBankAccount,
  modal: state.modalReducer.modal
})
export default connect(mapStateToProps)(CreateAccount);


