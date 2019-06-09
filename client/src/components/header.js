import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component {
  renderLists() {
    if (this.props.authenticated) {
      return (
        
        <li className="nav-item" key={1} >
          <Link to="/signout" className="nav-link">Sign Out </Link>
        </li>
    
        
      )

    } else {
      return [
        <li className="nav-item" key={1}>
        <Link to="/" className="nav-link" >Home </Link>
      </li>,
        <li className="nav-item" key={2}>
          <Link to="/signin" className="nav-link" >Sign In </Link>
        </li>,
      <li className="nav-item" key={3}>
        <Link to="/signup" className="nav-link" >Sign Up </Link>
      </li>,
      <li className="nav-item" key={4}>
      <a class="nav-item" href="/contact.html">Contact</a>
    </li>,
      <li className="nav-item" key={5}>
       <a class="nav-item" href="/about.html">About</a>
      </li>
      
      ]
    }

  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <Link to="/" className="navbar-brand"> Deepak Blog's </Link>
          <ul className="nav navbar-nav navbar-right">
            {this.renderLists()}
          </ul>
        </div>
      </nav>
    )
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Header)