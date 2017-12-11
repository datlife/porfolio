import React from 'react';
import BlogEntry from '../components/BlogEntry';

class BlogPage extends React.Component {
  render() {
    return (
      <div className='BlogPage'>
        Sample Blog BlogEntry
        <BlogEntry/>
      </div>
    );
  }
}

export default BlogPage;