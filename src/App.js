import React from 'react';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import Main from './Routes';
import './styles/App.css';
import {Container} from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <Container className="App">
          <MenuBar />
          <Main />
          <Footer />
      </Container>
    );
  }
}

export default App;
