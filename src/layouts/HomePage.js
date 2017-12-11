import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Bio'>
          This contain my photos and brief bio
        </div>
        <div className="News">
          What I am up to
        </div>
        <div className="Live">
          My lastest info 
        </div>
      </div>
    );
  }
}

export default HomePage;