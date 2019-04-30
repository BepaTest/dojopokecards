import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
      <Search/>
      <Gallery/>
      </div>
    );
  }
}
 
export default App;
