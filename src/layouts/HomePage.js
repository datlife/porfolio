import React from 'react';
import { NavLink } from 'react-router-dom';
import ArticlePreview from '../components/ArticlePreview';

import {posts} from './Data';


export let bio = {
  'name': 'Dat Nguyen',
  'title': 'Computer Science student @ UC Davis',
  'img': 'avatar.jpg',
  'about': ['Hi there, thank you for visiting my website. I am a rising senior in Computer Science and an undergraduate researcher at UC Davis Vision Lab in Computer Vision / Machine Learning. My current interest is in machine learning and I am open to new opportunities related to interesting CS problems (e.g. Large-scale Parallel Distributed Computing, Applied ML for social good).'],
    'contributions': 'https://github.com/users/datlife/contributions',
}

export let socials = {
  'icons/gmail.svg': 'tdat.nguyen93@gmail.com',
  'icons/github.svg': 'https://github.com/datlife',
  'icons/linkedin.svg': 'https://www.linkedin.com/in/tdatnguyen/',
  'icons/twitter.svg': 'https://twitter.com/dat_ai_',
}

export let latest_news = {
  '04/04/2018': 'This website is live.',
}

class HomePage extends React.Component {

  render() {
    return (
      <div className='Home'>
        <section className='introduction'>
          <div className="avatar">
            <img className='img-thumbnail rounded-circle' 
                 src={bio['img']} alt='img' />
          </div>
          <div className="about">
          <h1  id="my-name"> {bio.name} </h1>
          <small className="text-muted">{bio.title}</small>
            <p><i>{bio['about']}</i></p>
            <div className='socials'>
              <ul id='social-icons'>
                {Object.keys(socials).map((key, idx) => {
                  return (
                    <li id={idx} key={idx}>
                      <a href={socials[key]} target='_blank' 
                        rel="noopener noreferrer" >
                        <img src={key} alt='boring img' />
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Necessitatibus sint praesentium commodi reiciendis aspernatur, 
            suscipit provident animi vel laborum! Accusamus.</p>
        </section>
      </div>
    );
  }
}


export default HomePage;