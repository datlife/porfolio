import React from 'react';
import Project from '../components/Project';
import {Grid, Card} from 'semantic-ui-react';

class ProjectPage extends React.Component {
  render() {
    const items = [
      {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
      },
      {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
      },
      {
        header: 'Project Report - June',
        description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%',
      },
    ]
    return (
      <Grid stackable columns={1}>
        <Card.Group items={items} />
        {/* <Grid.Column>
          <Project/>
        </Grid.Column>
        <Grid.Column>
          <Project/>
        </Grid.Column>       */}
      </Grid>
    );
  }
}

export default ProjectPage;