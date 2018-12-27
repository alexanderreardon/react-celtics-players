import React from 'react';

import Teams from '../data/teams.json';
const defaultValue = 'celtics';

class TeamFilter extends React.Component {
    
    state = {
        filterTeam: defaultValue
    }
    
    teamFilterUpdate = (e) => {
        var teamInput = e.target.value;
        this.props.filterTeamUpdate(teamInput);
        
        var background = "";
        for (var i = 0; i < Teams.length;i++) {
            if (Teams[i].teamName === teamInput) {
                background = Teams[i].backgroundColor;
            }
        }
        this.props.backgroundColorUpdate(background);
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
                        )
                    })}
                </select>
            </div>
        )
    }

}

export default TeamFilter;