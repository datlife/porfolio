import React from 'react';

import HomePage from './layouts/HomePage';
import ResumePage from './layouts/ResumePage';
import BlogPage from './layouts/BlogPage';
import ProjectPage from './layouts/ProjectPage';
import LifePage from './layouts/LifePage';

import NotFoundPage from './layouts/NotFound';

import {Switch, Route} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/projects' component={ProjectPage}/>
        <Route path='/blog' component={BlogPage}/>
        <Route path='/resume' component={ResumePage}/>
        <Route path='/life' component={LifePage}/>
        <Route path='/*' component={NotFoundPage}/>

      </Switch>
    );
  }
}

export default Main;
