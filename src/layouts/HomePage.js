import React from 'react';
import { NavLink } from 'react-router-dom';
// @TODO: add redux
let bio = {
  'img': 'avatar.jpg',
  'about': ['Hi there, thank you for visiting my website. I am a rising junior and an undergraduate researcher at UC Davis in Computer Vision / Machine Learning. I was a ',
    <a href='https://riss.ri.cmu.edu' target='_blank' rel="noopener noreferrer" >Robotics Scholar</a>,
    ' at Carnegie Mellon University in Deep Learning for Smart City, and a ',
    <a href='http://emcor-reu.ncat.edu/' target='_blank' rel="noopener noreferrer" >NSF Scholarship Recipient</a>,
    '. My current interest is in machine learning and I am open to new opportunities related to interesting CS problems (e.g. Large-scale Parallel Computing, Applied ML for social good).'],
}

let socials = {
  'icons/gmail.svg': 'tdat.nguyen93@gmail.com',
  'icons/github.svg': 'https://github.com/datlife',
  'icons/linkedin.svg': 'https://www.linkedin.com/in/tdatnguyen/',
  'icons/twitter.svg': 'https://twitter.com/dat_ai_',
}

let latest_news = {
  '01/10/2018': 'Still searching for Summer Software Engineering Internship...',
  '09/26/2017': ['Start working with professor ',
  <a href='http://web.cs.ucdavis.edu/~yjlee/'>Yong J. Lee</a>, ' on Generative Adversarial Network (thank you!).'],
  '08/01/2017': 'Back to the Bay Area after the Summer Program at CMU',
}

let posts = {
  byId: {
    '1': {
      id: '1',
      author: 'Dat Nguyen',
      title: 'Hello World!',
      date: 'Dec 25, 2017',
      photo: 'hello-world.jpg',

      summary: "This website is a Serverless, React, Progressive Web App.",
      body: {},
      claps: 20,
      meh: 0,
    },
    '2': {
      id: '2',
      author: 'Dat Nguyen',
      title: 'Dataset pipeline for deep learning',
      date: 'Jan 10, 2018',
      photo: 'pipeline.gif',

      summary: "How to utilize tf.Dataset to create a low-latency data loader for training deep learning model",
      body: {},
      claps: 5,
      meh: 1,
    },

    '3': {
      id: '3',
      author: 'Dat Nguyen',
      title: '[YOLOv2 - Explained] Part 1: How anchors work',
      date: 'Jan 15, 2018',
      photo: 'yolov2.png',

      summary: "This is the first post of a series explaining how YOLOv2 works",
      body: {
      },
      claps: 10,
      meh: 0,
    },
  },
  allIds: ['1', '2', '3']
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      github_data: null,
      isLoaded: false,
    }
  }
  componentDidMount() {
    this.setState({ isLoaded: true });

    fetch('https://github.com/users/datlife/contributions')
      .then(response => {
        if (response.ok) return response.text()
      })
      .then(data => { this.setState({ github_data: data }) })
      .catch(error => console.error('Error:', error))
  }


  render() {
    return (
      <div className='Home'>
        <section className='introduction'>
          <div className="avatar">
            <img src={bio['img']} alt='img' className='img-thumbnail rounded-circle' />
          </div>
          <div className="about">
            <h3>Dat Nguyen</h3>
            <p>{bio['about']}</p>

            <div className='socials'>
              <ul id='social-icons'>
                {Object.keys(socials).map((key, idx) => {
                  return (
                    <li id={idx}>
                      <a href={socials[key]} target='_blank' rel="noopener noreferrer" >
                        <img src={key} />
                      </a>
                    </li>);
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="latest-news">
          <h2 className="bd-title">Latest News</h2>
          <ul className="latest-news">
            {Object.keys(latest_news).map((key, idx) => {
              return (
                <li id={idx}>
                  {key}: {latest_news[key]}
                </li>);
            })}
          </ul>
        </section>
        {/* My Latest News */}

        <section className="blog">
          <h2 className="bd-title">Blog</h2>
          {
            posts.allIds.length ?
              posts.allIds
              .sort((a, b)=> a < b)
              .map((id) => {
                let blog_entry = posts.byId[id];
                return (
                  <div className="card mb-3" id={id}>
                    <div className="card-body">
                      <h4 className="card-title">{blog_entry.title}</h4>
                      <p className="card-text">{blog_entry.summary}</p>
                    </div>
                  </div>
                );
              }) : null
          }
          <p><NavLink className='nav-link' to='/blog'>More...</NavLink></p>
        </section>

        <section className="projects">
          <h2 className="bd-title">Side Projects</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sint praesentium commodi reiciendis aspernatur, suscipit provident animi vel laborum! Accusamus.</p>
        </section>

        <section className="Github">
          <h3 className="bd-title">Open-source Contributions</h3>
          <a href='https://github.com/datlife'>
          <div classname="contributions" dangerouslySetInnerHTML={{ __html: this.state.github_data }} />
          </a>
        </section>
      </div>
    );
  }
}

export default HomePage;