import React, { Component } from 'react';
import logo from '../img/logo.png';
import SearchFilter from './SearchFilter';
import PlayerGrid from './PlayerGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    }
  }
  
  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="header-logo" alt="logo" />
        </header>
        <SearchFilter filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
        <PlayerGrid filterText={this.state.filterText}/>

      </div>
    );
  }
}

export default App;
