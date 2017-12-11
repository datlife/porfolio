import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

class MenuBar extends React.Component {
  
  render() {
    return (
      <Menu stackable>
        <Menu.Item as={NavLink} to='/' > <Icon name='home' size='large' /></Menu.Item>
        {/* <Menu.Item as={NavLink} to='/resume'> CV/Publications </Menu.Item> */}
        <Menu.Item as={NavLink} to='/blog'> Blog </Menu.Item>
        <Menu.Item as={NavLink} to='/projects'> Projects </Menu.Item>
        <Menu.Item as={NavLink} to='/life'> Life </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;