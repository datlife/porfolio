import React   from 'react';
import Main    from './Routes';
import Header  from './components/Header';
import Footer  from './components/Footer';

// for History
import {BrowserRouter, Router} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
