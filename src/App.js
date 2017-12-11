import React from 'react';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import Main from './Routes';

import {Container} from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
