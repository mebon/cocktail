import React, { Component } from "react";
import text from "../../image/textsm.png"
import logo from "../../image/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
export default class Navi extends Component {



  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" >
          <NavbarBrand href="/" ><img height="40" src={logo} alt="logo"></img></NavbarBrand>
          <NavbarBrand href="/" ><img height="30" src={text} alt="text"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem >
                <NavLink href="/main/"><b>| Main Page |</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cocktails/"><b>| Categories |</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search/"><b>| Search |</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/mebon/cocktail">
                  <b>| GitHub |</b>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
}
