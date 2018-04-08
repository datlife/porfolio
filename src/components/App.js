import React   from 'react';
import Main    from '../Routes';
import Header from './common/Header';
import Footer  from './common/Footer';

// for History
import {BrowserRouter} from 'react-router-dom';
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
