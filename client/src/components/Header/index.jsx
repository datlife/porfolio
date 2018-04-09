import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';


class Header extends React.Component {
  state = {
    navCollapsed: true
  }
  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }

  render() {
    const { navCollapsed } = this.state

    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-header">
            <NavLink className='navbar-brand' to='/'>
            <strong>DatCode</strong></NavLink>
          </div>
          <button className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={this._onToggleNav}
            data-toggle="collapse"
            data-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} id="menu">
            <ul className="navbar-nav ml-auto">
              <li className='nav-item'><NavLink className='nav-link' to='/blog'>Blog</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to='/projects'>Projects</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to='/life'>Life</NavLink></li>
            </ul>
          </div>
          {/* <Menu.Item as={NavLink} to='/resume'> CV/Publications </Menu.Item> */}
        </nav>
      </div>

    );
  }
}

export default Header;