import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserNavComponent from '../UserNavComponent/UserNavComponent';
import SideNav from '../SideNavComponent/SideNav';
import './userDashboard.css'


const Dashboard = (props) => {
  return (
    <div>
      <UserNavComponent/>
      <SideNav />
      <div className="user-pf-body">
        profile
      </div>
    </div>
  )
}

export default connect()(Dashboard);

