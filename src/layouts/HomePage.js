
import React from 'react';
import { NavLink } from 'react-router-dom';
import {posts} from './Data';
import ArticlePreview from '../components/Article/Preview';

let bio = {
  'img': 'avatar.jpg',
  'about': ['Hi there, thank you for visiting my website. I am a rising junior and an undergraduate researcher at UC Davis in Computer Vision / Machine Learning. I was a ',
    <a key="cmu" href='https://riss.ri.cmu.edu' target='_blank' rel="noopener noreferrer" >Robotics Scholar</a>,
    ' at Carnegie Mellon University in Deep Learning for Smart City, and a ',
    <a  key="ncat" href='http://emcor-reu.ncat.edu/' target='_blank' rel="noopener noreferrer" >NSF Scholarship Recipient</a>,
    '. My current interest is in machine learning and I am open to new opportunities related to interesting CS problems (e.g. Large-scale Parallel Distributed Computing, Applied ML for social good).'],
    'contributions': 'https://github.com/users/datlife/contributions',
}

let socials = {
  'icons/gmail.svg': 'tdat.nguyen93@gmail.com',
  'icons/github.svg': 'https://github.com/datlife',
  'icons/linkedin.svg': 'https://www.linkedin.com/in/tdatnguyen/',
  'icons/twitter.svg': 'https://twitter.com/dat_ai_',
}
let latest_news = {
  '01/10/2018': 'Still looking for Summer Software Engineering Internship...',
  '09/26/2017': ['Start working with professor ',
    <a key="ucdavis" href='http://web.cs.ucdavis.edu/~yjlee/'>Yong J. Lee</a>, ' on Generative Adversarial Network (thank you!).'],
  '08/01/2017': 'Back to the Bay Area after the Summer Program at CMU',
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
          <h1  id="my-name"> Dat Nguyen </h1>
          <small className="text-muted">Computer Science student @ UC Davis</small>
            <p><i>{bio['about']}</i></p>
            <div className='socials'>
              <ul id='social-icons'>
                {Object.keys(socials).map((key, idx) => {
                  return (
                    <li id={idx} key={idx}>
                      <a href={socials[key]} target='_blank' rel="noopener noreferrer" >
                        <img src={key} />
                      </a>
                    </li>);
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* My Latest News */}
        <section className="latest-news">
          <h2 className="bd-title">Latest News</h2>
          <ul className="latest-news">
            {Object.keys(latest_news).map((key, idx) => {
              return (
                <li id={idx} key={idx}>
                  {key}: {latest_news[key]}
                </li>);
            })}
          </ul>
        </section>

        {/* Blog section */}
        <section className="blog">
          <h2 className="bd-title">Blog</h2>
          <div className="summary">
          {posts.allIds.length ?
              posts.allIds
                .sort((a, b) => a < b)
                .map((id) => {
                  let blog_entry = posts.byId[id];
                  return <ArticlePreview post_summary={blog_entry} minimal={true} />
              }) 
            : null
          }
          </div>
          <p><NavLink className='nav-link' to='/blog'>More...</NavLink></p>
        </section>

        <section className="projects">
          <h2 className="bd-title">Side Projects</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sint praesentium commodi reiciendis aspernatur, suscipit provident animi vel laborum! Accusamus.</p>
        </section>
      </div>
    );
  }
}


export default HomePage;