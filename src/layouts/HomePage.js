import React from 'react';

let bio = {
  'img':      'https://avatars2.githubusercontent.com/u/13214917?s=460&v=4',
  'github':   'https://github.com/datlife',
  'linkedin': 'https://www.linkedin.com/in/tdatnguyen/',
  'twitter':  'https://twitter.com/dat_ai_',
  'email':    'tdat.nguyen93@gmail.com',
  'about':    '"Hello, thank you for visting my website.' +
              'I am currently a Computer Science junior at UC Davis.' +
              'My work is currently on solving Computer Vison / Machine Learning problems' +
              'through latest research in the field. "',
} 

class HomePage extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Bio'>
          <div className='Photo'>
            <img src={bio['img']} />
            <div className='Brands'>
              <ul>
                 <li> <a href={bio['github']}><object data='assets/icons/github.svg' type='image/svg+xml' /> </a></li>
                <a href={bio['linkedin']}><li className='fab fa-linkedin fa-2x'/></a>
                <a href={bio['twitter']}> <li className='fab fa-twitter  fa-2x'/></a>
              </ul>
            </div>
          </div>

          <div className='Pitch'>
            <p>{bio['about']}</p>
          </div>
        </div>
        <div className='News'>
          What I am up to
        </div>

        <div className='Live'>
          Feed news (twitter, facebook, etc.) 
        </div>

      </div>
    );
  }
}

export default HomePage;