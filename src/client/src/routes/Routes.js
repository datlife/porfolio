import React from 'react';
import HomePage        from '../layouts/HomePage';
import BlogPage        from '../layouts/BlogPage';
import ProjectPage     from '../layouts/ProjectPage';
import LifePage        from '../layouts/LifePage';
import NotFoundPage    from '../layouts/NotFound';

import Article from '../components/Article';
import {Switch, Route} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/'   component={HomePage}/>
          <Route path='/blog'     component={BlogPage}/>
          <Route path='/posts/:id' component={Article}/>
          <Route path='/projects' component={ProjectPage}/>
          <Route path='/life'     cosmponent={LifePage}/>
          <Route path='/*'        component={NotFoundPage}/>
        </Switch>
      </div> 
    );
  }
}

export default Main;
