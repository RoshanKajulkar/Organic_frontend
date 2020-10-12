import React from "react";
import { signin } from "./helper/AuthApi";

//Redux
import { connect } from "react-redux";

//Action
import { addUser } from "../../store/action/user";

const Signin = (props) => {

  const loginUser = (e) => {
    e.preventDefault();
    signin().then((data) => {
      props.adduser(data);
      props.redirection("home");
    });
  };

  return (
    <div>
      {props.message && <h1>please login before accessing the cart</h1>}
      <form onSubmit={loginUser}>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adduser: (data) => dispatch(addUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
