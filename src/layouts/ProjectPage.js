import React from 'react';
import Project from '../components/Project';
import {Grid} from 'semantic-ui-react';

class ProjectPage extends React.Component {
  render() {
    return (
      <Grid stackable columns={1}>
        <Grid.Column>
          <Project/>
        </Grid.Column>
        <Grid.Column>
          <Project/>
        </Grid.Column>      
      </Grid>
    );
  }
}

export default ProjectPage;