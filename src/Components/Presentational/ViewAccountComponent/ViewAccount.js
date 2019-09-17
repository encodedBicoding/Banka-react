import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserNavComponent from '../UserNavComponent/UserNavComponent';
import SideNav from '../SideNavComponent/SideNav';
import { getAllAccounts } from '../../../Actions/accountsActions';
import Accounts from '../../../Components/AccountsComponent/Accounts';

class ViewAccount extends Component {
  componentDidMount(){
    getAllAccounts();
  }
  render(){
    const { data, isFetchingAccounts } = this.props;
    return (
      <>
        <UserNavComponent/>
        <SideNav />
       {
         isFetchingAccounts ? <p className="user-pf-content-body">Loading...</p>
           :
           data.length <= 0 ? <p classNmae="user-pf-content-body">You have no accounts yet</p>
             :
             data.map((account, idx) => (
               <Accounts
                 key={idx}
                 accountNumber={account.accountnumber}
                 balance={account.balance}
                 lastDeposit={account.lastdeposit}
                 accountCategory={account.ownercategory}
                 accountStatus={account.status}
                 accountType={account.type}
                 lastWithdrawal={account.lastwithdrawal}
               />
             ))
       }
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state.accountsReducer.accountsData,
  isFetchingAccounts: state.accountsReducer.isFetchingAccounts,
})
export default connect(mapStateToProps)(ViewAccount);

