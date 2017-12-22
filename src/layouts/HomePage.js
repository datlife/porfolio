import React from 'react';
let bio = {
  'img': 'avatar.jpg',
  'about': 'Hi there, thank you for visting my website. As you can tell from my profile photo, I am an ENFP although I am pretty isolated for the past few years to focus on school. I am a RISS alum at Carnegie Mellon University. My interest is to Machine Learning/Computer Vision skills into challenging problems.',
  'note': 'P/S: If you are living in the North Cal and wanna get good Pho, feel free to contact me ;).',
}

let socials = {
  'gmail.svg': 'tdat.nguyen93@gmail.com',
  'github.svg': 'https://github.com/datlife',
  'linkedin.svg': 'https://www.linkedin.com/in/tdatnguyen/',
  'twitter.svg': 'https://twitter.com/dat_ai_',
}

class HomePage extends React.Component {
  render() {
    console.log("PUBLIC URL: ", process.env.PUBLIC_URL);
    return (
      <div className='Home'>

        {/* About me section */}
        <section className='Bio'>
          <div className='Photo'>
            <img src={bio['img']} alt='img' />
            <div className='Brands'>
              <ul id='connect'>
                {Object.keys(socials).map((key, idx) => {
                  return (<li>
                    <a href={socials[key]} target='_blank'>
                      <img src={'icons/' +key} />
                    </a>
                  </li>);
                })
                }
              </ul>
            </div>
          </div>
          <div className='Pitch'>
            <h3>About me</h3>
            <p>{bio['about']}</p>
            <p>{bio['note']}</p>
          </div>
        </section>

        {/* My Latest News */}
        <section id='News'>
          <h3>Latest news</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam temporibus iusto sint labore explicabo impedit molestias, nemo perferendis corporis animi, distinctio, natus cum excepturi reprehenderit. Doloribus beatae maxime quisquam!</p>
        </section>

        {/* My Projects */}
        <section className="Projects">
          <h3>Projects</h3>
        </section>
              


      </div>
    );
  }
}

export default HomePage;