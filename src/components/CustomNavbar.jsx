import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {

  render () {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">ReSellText</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/store" to="/store">
              Store
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/show" to="/show">
              Show
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
