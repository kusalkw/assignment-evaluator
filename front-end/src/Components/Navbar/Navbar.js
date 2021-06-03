import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import Ucsc from "../../Ucsc.png";
import "./Navbar.css";
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';
import { Icon, Popup, Button, List } from 'semantic-ui-react'
import  {deletetoken} from '../../actions/authActions'
import { getuserprofile } from '../../actions/authActions'
import { connect } from 'react-redux'
class NavbarPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      username: props.username,
      requestcount: props.requestcount,
      requests: []
    };
    console.log(props)
  }
  logout(){
    deletetoken()
  }
 
 

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  componentWillReceiveProps(nextprops) {
    console.log(nextprops)
    this.setState({ requestcount: nextprops.requestcount })
    this.setState({ requests: nextprops.requests })
  }

  render() {
    return (
      <MDBNavbar color="light" dark expand="md">
        <MDBNavbarBrand>
          <strong className='title' style={{ color: '#000000'}}>Welcome Admin</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavItem active>
                <NotificationBadge count={this.state.requestcount} effect={Effect.SCALE} />

               
              </MDBNavItem>
            </MDBNavItem>
            <MDBNavItem active>
              <Icon size='big' name='bell' >  <NotificationBadge count={3} effect={Effect.SCALE} /></Icon>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="/login"><b onClick={this.logout} style={{ color: '#000000' }}>log out </b></MDBNavLink>
            </MDBNavItem>
           
            {/* <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline"><b>Dropdown</b></div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem> */}
          </MDBNavbarNav>

          {/*    <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="google-plus-g" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav> */}
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return (    
      {
        user: state.auth.user,
      }    
  )
}
export default connect(mapStateToProps, {getuserprofile})(NavbarPage);
