import React from 'react';
import { NavLink } from 'react-router-dom';
// @TODO: add redux
let bio = {
  'img': 'avatar.jpg',
  'about': ['Hi there, thank you for visiting my website. I am an undergraduate researcher at UC Davis in Computer Vision / Machine Learning, expected to graduate in May 2019. I was a ',
    <a href='https://riss.ri.cmu.edu' target='_blank'>Robotics Scholar</a>,
    ' at Carnegie Mellon University in Deep Learning for Smart City, and a ',
    <a href='http://emcor-reu.ncat.edu/' target='_blank'>NSF Scholarship Recipient</a>,
    '. My current interest is in machine learning, however, I am open to new opportunities related to Computer Science.'],
}

let socials = {
  'icons/gmail.svg': 'tdat.nguyen93@gmail.com',
  'icons/github.svg': 'https://github.com/datlife',
  'icons/linkedin.svg': 'https://www.linkedin.com/in/tdatnguyen/',
  'icons/twitter.svg': 'https://twitter.com/dat_ai_',
}

let latest_news = {
  '01/15/2017': 'Testing...',
  '01/01/2017': 'YOLOv2 is completed',
  '09/26/2017': 'Stated a new school year at UC Davis!',
  '08/01/2017': 'Back to the Bay Are after the Summer Program',
}

let posts = {
  byId: {
    '1': {
      id: '1',
      author: 'Dat Nguyen',
      title: 'Hello World!',
      date: '25/01/2018',
      photo: 'hello-world.jpg',

      summary: "This is my first blog post",
      body: {},
      claps: 20,
      meh: 0,
    },
    '2': {
      id: '2',
      author: 'Dat Nguyen',
      title: 'Dataset pipeline for deep learning',
      date: '01/15/2018',
      photo: 'pipeline.gif',

      summary: "How to utilize tf.Dataset to create low-latency data loader for training",
      body: {},
      claps: 5,
      meh: 1,
    },

    '3': {
      id: '3',
      author: 'Dat Nguyen',
      title: '[YOLOv2 - Explained] Part 1: How anchors work',
      date: '01/15/2018',
      photo: 'hello-world.jpg',

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
                      <a href={socials[key]} target='_blank'>
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
            posts.allIds.map((id) => {
              let blog_entry = posts.byId[id];
              console.log(blog_entry)
              return (
                <div className="card mb-3" id={id}>
                    <div className="card-body">
                      <h5 className="card-title">{blog_entry.title}</h5>
                      <p className="card-text">{blog_entry.summary}</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
              );
            }): null
          }
          <p><NavLink className='nav-link' to='/blog'>More...</NavLink></p>
        </section>

              <section className="projects">
                <h2 className="bd-title">Side Projects</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil sequi cum ratione, illum enim facere natus assumenda sed magni possimus nostrum repudiandae ipsam delectus esse veritatis quia dicta est animi deleniti rem quaerat magnam voluptate. Veritatis eos illo culpa!</p>
              </section>
        {/* My Latest Projects */ }

      </div>
    );
  }
}

export default HomePage;