import React from 'react';

const team_names= require('../data/teams.json');
export default ( {filterText} ) => {
    
    const renderTeamOption = team_names.map((team) => <option key={team.id} value={team.teamName}>{team.fullName}</option>)

    return (
        <select>
            {renderTeamOption}
        </select>
    )

}