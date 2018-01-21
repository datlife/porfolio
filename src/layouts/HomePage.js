import React from 'react';
let bio = {
  'img': 'avatar.jpg',
  'about': 'Hi, thanks for visiting my website. I am an undergraduate researcher at UC Davis in Computer Vision / Machine Learning, expected to graduate in May 2019. I was a Robotics Scholar at Carnegie Mellon University in Deep Learning for Smart City, and a NSF Scholarship Recipient. My current interest is in machine learning, however, I am open to new opportunities.',
}


class HomePage extends React.Component {
  render() {
    return (
      <div className='Home'>
        {/* About me section */}
        <section className='Bio'>
          <div className='Photo'>
            <img src={bio['img']} alt='img' />
          </div>
          <div className='Pitch'>
            <h3>About me</h3>
            <p>{bio['about']}</p>
          </div>
        </section>

        {/* My Latest News */}
        {/* My Latest Projects */}

      </div>
    );
  }
}

export default HomePage;