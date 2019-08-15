import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

const Homepage = props => {
  const changeHomeTitle = () => {
    document.title = props.homeTitle;
  };
  useEffect(() => {
    return changeHomeTitle();
  }, [changeHomeTitle]);
  return (
    <div>
      <Navbar
        home="Home"
        about="About"
        contact="Contact"
        signup="Sign Up"
        login="Log In"
      />
    </div>
  );
};
const mapStateToProps = state => ({
  homeTitle: state.homeTitle
});
export default connect(mapStateToProps)(Homepage);
