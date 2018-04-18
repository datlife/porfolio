import React from 'react';
import ArticlePreview from '../components/ArticlePreview';
import {posts} from './Data';

class BlogPage extends React.Component {
  render() {
    return (
      <div className='BlogPage'>
        {
          // Request for overview posts in this page
          posts.allIds.length ?
            posts.allIds
            .sort((a, b)=> a < b)
            .map((id) => {
              let summary = posts.byId[id];
              return <ArticlePreview post_summary={summary} minimal={false} />
            }) : null
        }
      </div>
    );
  }
}

export default BlogPage;