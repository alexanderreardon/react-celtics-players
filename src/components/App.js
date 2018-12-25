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
      filterTeam: 'celtics'
    }
  }
  
  filterTextUpdate(textValue) {
    this.setState({
      filterText: textValue
    })
  }

  filterTeamUpdate(dropdownValue) {
    this.setState({
      filterTeam: dropdownValue
    })
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="header-logo" alt="logo" />
        </header>
        <TeamFilter
          filterTeam={this.state.filterTeam}
          filterTeamUpdate={this.filterTeamUpdate.bind(this)} />
        <SearchFilter
          filterText={this.state.filterText}
          filterTextUpdate={this.filterTextUpdate.bind(this)} />
        <PlayerGrid
          filterText={this.state.filterText}
          filterTeam={this.state.filterTeam} />
        <Footer />

      </div>
    );
  }
}

export default App;
