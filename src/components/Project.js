import React from 'react';
import {Segment} from 'semantic-ui-react';

class Project extends React.Component {
  render() {
    return (
      <Segment className='Project'>
        <div className='Project-Title'>
          Title of the project + photo A link + demo should be included here
        </div>

        <div className='Project-Description'>
          Provide brief abstract of the project
        </div>

        <div className='Project-Body'>
          Goes into detail of the body
        </div>
      </Segment>
    );
  }
}
export default Project;