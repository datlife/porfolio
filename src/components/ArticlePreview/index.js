import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class ArticlePreview extends  React.Component{
  render(){
    let {post_summary, minimal} = this.props
    
    return (
      <div className="summary card mb-3" key={post_summary.id} id={post_summary.id}>
      <img className="card-img-top" 
           src={post_summary.photo} 
           alt="Card" />
      <Link to={{
        pathname: `/posts/${post_summary.id}`, 
        state:{post_id: post_summary.id}}} 
        style={{ textDecoration: 'none' }}>
      <div className="card-body">
        <h5 className="card-title"><strong>{post_summary.title}</strong></h5>
        <p className="card-text">{post_summary.summary}</p>
        <br />
        {minimal ? null: 
          <p className="card-text">
                <small className="text-muted">Posed by <i>Dat Nguyen </i> on {post_summary.date}</small>
          </p>}
      </div>
      </Link>
    </div>
    )
  }
}

export default ArticlePreview;