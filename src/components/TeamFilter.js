import React from 'react';

import Teams from '../data/teams.json';
const defaultValue = 'celtics';

class TeamFilter extends React.Component {
    
    state = {
        filterTeam: defaultValue
    }

    teamFilterUpdate = (e) => {
        this.setState({
            filterTeam: e.target.value
        })
        this.props.filterTeamUpdate(e.target.value);
    }

    render() {
        return (
            <div className="team-dropdown-div" >
                <select
                    id="team-dropdown"
                    defaultValue={defaultValue}
                    onChange={this.teamFilterUpdate.bind(this)}
                >
                    {Teams.map( (team) => {
                        return (
                            <option
                                key={team.id}
                                value={team.teamName}
                            >
                                {team.fullName}
                            </option>
                        )})}
                </select>
            </div>
        )
    }

}

export default TeamFilter;