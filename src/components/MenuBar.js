import React from 'react';
import {Menu} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

class MenuBar extends React.Component {
  
  render() {
    return (
      <Menu fixed='top' inverted>
        <Menu.Menu>
          <Menu.Item as={NavLink} to='/' > Home </Menu.Item>
          <Menu.Item as={NavLink} to='/resume'> CV/Publications </Menu.Item>
          <Menu.Item as={NavLink} to='/blog'> Blog </Menu.Item>
          <Menu.Item as={NavLink} to='/projects'> Projects </Menu.Item>
          <Menu.Item as={NavLink} to='/life'> Life </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MenuBar;