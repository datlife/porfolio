import React from 'react';

class LifeEvent extends React.Component{

  render() {
    return (
      <div className='LifeEvent'>
        <div className='LifeEvent-title'>
          Title of a life event
        </div>
        <div className='LifeEvent-body'>
          This be can be dynamic. Could a a gallery of photos or a video, or a paragraph.
        </div>
      </div>
    );
  }
}
export default LifeEvent;