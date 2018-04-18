import React from 'react';
import './style.css';
import {posts} from '../../layouts/Data';

class Article extends React.Component {
  render() {
    // Query an article using id from props
    let article = posts.byId['1'] 
    return (
      <div className='Article'>
         <img className="cover-photo img-responsive" 
           src={article.photo} 
           alt="Not found!" />
        <h1 className="Headline">{article.title}</h1>
        <p> {article.summary} </p>
      </div>
    );
  }
}

export default Article;