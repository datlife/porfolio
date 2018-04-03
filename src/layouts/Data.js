// @TODO: add redux
export let posts = {
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