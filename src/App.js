import React from 'react';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import Main from './Routes';
import { BrowserRouter } from 'react-router-dom';

import {Container} from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container  style={{ marginTop: '3em' }} >
          <div className="App">
            <MenuBar />
            <Main />
            <Footer />
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
