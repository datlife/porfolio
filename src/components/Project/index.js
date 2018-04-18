import React from 'react';
import './style.scss';


class Project extends React.Component {
  render() {
    return (
      <div className='Project'>
        <div className='Project-Title'>
          Title of the project + photo A link + demo should be included here
        </div>

        <div className='Project-Description'>
          Provide brief abstract of the project
        </div>

        <div className='Project-Body'>
          Goes into detail of the body
        </div>
      </div>
    );
  }
}
export default Project;