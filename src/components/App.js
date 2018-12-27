import React, { Component } from 'react';
import Header from './Header'
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
      backgroundColor: "#007A33",
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

  backgroundColorUpdate(teamColor) {
    this.setState({
      backgroundColor: teamColor
    })
  }

  positionFilterUpdate(positionValue) {
    this.setState({
      position: positionValue
    })
  }

  render() {
    return (
      <div className="App" style={{background: this.state.backgroundColor}} >
        <Header filterTeam={this.state.filterTeam} />
        <TeamFilter
          filterTeamUpdate={this.filterTeamUpdate.bind(this)}
          backgroundColorUpdate={this.backgroundColorUpdate.bind(this)} />
        <PositionFilter
          positionFilterUpdate={this.positionFilterUpdate.bind(this)}
        />
        <SearchFilter
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
