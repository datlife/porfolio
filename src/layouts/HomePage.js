import React from 'react';
import {Image, Grid, Segment, Item } from 'semantic-ui-react'

class HomePage extends React.Component {
  render() {
    let bio= [
      {
      childKey: 0,        
      image: 'https://avatars1.githubusercontent.com/u/13214917?s=400&u=543af7f7f027c55c57d6d32e2343d5f7a4778cfd&v=4',
      header: 'Dat T. Nguyen',
      meta: 'CS Student @ UC Davis',      
      description: 'Hi there, thanks for visting my website. Pitch!!! ' +
      'Hi there, thanks for visting my website. Pitch!!! ' +
      'Hi there, thanks for visting my website. Pitch!!! ' +
      'Hi there, thanks for visting my website. Pitch!!! ' +
      'Hi there, thanks for visting my website. Pitch!!! ',
      extra: 'What should I put here',
    }]
    return (
      <div className='Home'>
        <Grid container='true'>
          <Segment>
          <Item.Group items={bio} />

          </Segment>
         
        </Grid>

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