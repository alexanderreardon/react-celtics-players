import React, { Component } from 'react';
import logo from '../img/logo.png';
import TeamFilter from './TeamFilter';
import SearchFilter from './SearchFilter';
import PlayerGrid from './PlayerGrid';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterTeam: this.props.filterTeam
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
        <TeamFilter filterTeam={this.state.filterTeam} />
        <SearchFilter filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
        <PlayerGrid filterText={this.state.filterText} filterTeam={this.state.filterTeam} />
        <Footer />

      </div>
    );
  }
}

export default App;
