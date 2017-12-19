import React from 'react';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import Main from './Routes';

// for History
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div  style={{ marginTop: '3em' }} >
          <div className="App">
            <MenuBar />
            <Main />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
