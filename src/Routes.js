import React from 'react';
import Login           from './components/Login';
import HomePage        from './layouts/HomePage';
import ResumePage      from './layouts/ResumePage';
import BlogPage        from './layouts/BlogPage';
import ProjectPage     from './layouts/ProjectPage';
import LifePage        from './layouts/LifePage';
import NotFoundPage    from './layouts/NotFound';
import {Switch, Route} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/'   component={HomePage}/>
          <Route path='/projects' component={ProjectPage}/>
          <Route path='/blog'     component={BlogPage}/>
          <Route path='/resume'   component={ResumePage}/>
          <Route path='/life'     component={LifePage}/>
          <Route path='/login'    component={Login} />
          <Route path='/*'        component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
