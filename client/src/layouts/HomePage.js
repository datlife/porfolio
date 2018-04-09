import React from 'react';
import { NavLink } from 'react-router-dom';
import ArticlePreview from '../components/ArticlePreview';

import {posts, bio, socials, latest_news} from './Data';

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