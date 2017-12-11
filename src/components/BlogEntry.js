import React from 'react';

class BlogEntry extends React.Component {
  render() {
    return (
      <div className='Entry'>
        <div className='Entry-Title'>
          Title of this blog entry, date
        </div>

        <div className='Entry-Body'>
          This is the body of this blog entry, should be rendered through markdown
        </div>
      </div>
    );

  }
}

export default BlogEntry;