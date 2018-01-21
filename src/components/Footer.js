import React from 'react';

let socials = {
  'icons/gmail.svg':    'mailto:tdat.nguyen93@gmail.com',
  'icons/github.svg':   'https://github.com/datlife',
  'icons/linkedin.svg': 'https://www.linkedin.com/in/tdatnguyen/',
  'icons/twitter.svg':  'https://twitter.com/dat_ai_',
}

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className='Brands'>
          <ul id='social-icons'>
            {Object.keys(socials).map((key, idx) => {
              return (
                <li>
                  <a href={socials[key]} target='_blank'>
                    <img src={key} />
                  </a>
                </li>);
            })}
          </ul>
        </div>
        <div className="footer-message">
          <p><i> "Where is a will, there's a way." - Somebody</i></p>
        </div>
      </div>
    );
  }
}
export default Footer;