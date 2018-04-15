import React   from 'react';
import Main    from './routes/Routes';
import Header from './components/Header';
import Footer  from './components/Footer';
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
