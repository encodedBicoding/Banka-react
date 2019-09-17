import React, { Component } from 'react';
import './Account.css';

class Accounts extends Component {
  render() {
    const {
      accountNumber,
      balance,
      lastDeposit,
      lastWithdrawal,
      accountCategory,
      accountType,
      accountStatus,
    } = this.props;
    return(
      <div className="account-container user-pf-content-body">
        <div className="account-content">
          <div className="account-holder">
            <div>
              <label>Account Number: </label>
              {accountNumber}
            </div>
            <div>
              <label>Account Balance: </label>
              {'N'}{balance}
            </div>
            <div>
              <label>Last Deposit: </label>
              {lastDeposit}
            </div>
            <div>
              <label>Last Withdrawal: </label>
              {lastWithdrawal}
            </div>
            <div>
              <label>Cetegory: </label>
              {accountCategory}
            </div>
            <div>
              <label>Type: </label>
              {accountType}
            </div>
          </div>
          <p className="stat-wrapper">
            <span className={accountStatus === 'active' ? 'a-stat account-active': 'a-stat account-not-active'}>.
            </span>
            <span className="stat-text">
              {accountStatus}
            </span>
          </p>
        </div>
      </div>
    )
  }
}
export default Accounts;

