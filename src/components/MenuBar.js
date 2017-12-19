import React from 'react';
import { NavLink } from 'react-router-dom'

class MenuBar extends React.Component {
  render() {
    return (
        <nav className="Navbar">
          <ul className='Navbar-Nav'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/life'>Life</NavLink></li>
          </ul>
                  {/* <Menu.Item as={NavLink} to='/resume'> CV/Publications </Menu.Item> */}
        </nav>       
    );
  }
}

export default MenuBar;