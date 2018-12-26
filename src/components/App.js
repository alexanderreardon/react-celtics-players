import React, { Component } from 'react';
import logo from '../img/logo.png';
import TeamFilter from './TeamFilter';
import PositionFilter from './PositionFilter';
import SearchFilter from './SearchFilter';
import PlayerGrid from './PlayerGrid';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterTeam: 'celtics',
      position: ''
    }
  }
  
  filterTextUpdate(textValue) {
    this.setState({
      filterText: textValue
    })
  }

  filterTeamUpdate(teamValue) {
    this.setState({
      filterTeam: teamValue
    })
  }

  positionFilterUpdate(positionValue) {
    this.setState({
      position: positionValue
    })
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="header-logo" alt="logo" />
        </header>
        <TeamFilter
          filterTeamUpdate={this.filterTeamUpdate.bind(this)} />
        <PositionFilter
          positionFilterUpdate={this.positionFilterUpdate.bind(this)}
        />
        <SearchFilter
          filterText={this.state.filterText}
          filterTextUpdate={this.filterTextUpdate.bind(this)} />
        <PlayerGrid
          position={this.state.position}
          filterText={this.state.filterText}
          filterTeam={this.state.filterTeam} />
        <Footer />

      </div>
    );
  }
}

export default App;
