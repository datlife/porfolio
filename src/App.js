import React   from 'react';
import Main    from './Routes';
import MenuBar from './components/MenuBar';
import Footer  from './components/Footer';

// for History
import {BrowserRouter} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MenuBar/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
