import React from 'react';
import BlogEntry from '../components/BlogEntry';


let posts = {
  byId: {
    '1': {
      id: '1',
      author: 'Dat Nguyen',
      title: 'Hello World!',
      date: 'Dec 25, 2017',
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
      date: 'Jan 10, 2018',
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

class BlogPage extends React.Component {
  render() {
    return (
      <div className='BlogPage'>
        {
          posts.allIds.length ?
            posts.allIds
            .sort((a, b)=> a < b)
            .map((id) => {
              let blog_entry = posts.byId[id];
              return (
                <div className="card mb-3" id={id}>
                  {/* <img className="card-img-top" src={'posts/'+blog_entry.id+'/'+blog_entry.photo} alt="Card image cap" /> */}
                  <div className="card-body">
                    <h5 className="card-title">{blog_entry.title}</h5>
                    <p className="card-text">{blog_entry.summary}</p>
                    <br />
                    <p className="card-text">
                          <small className="text-muted">Posed by <i>Dat Nguyen </i> on {blog_entry.date}</small>
                    </p>
                  </div>
                </div>
              );
            }) : null
        }
      </div>
    );
  }
}

export default BlogPage;