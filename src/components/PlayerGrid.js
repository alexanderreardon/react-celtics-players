import React from 'react';
import Player from './Player';

const numberWithCommas = (x) => {
    if (x === null) {
        return null
    } else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

export default ( {filterText, filterTeam} ) => {
    
    var currentTeam = filterTeam;
    const playerData = require(`../data/${currentTeam}.json`);

    const renderPlayers = playerData
        .filter( (player) => {
            return player.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
        })
        .map( (player) => {
            var rawBirthday = new Date(player.birthDate);
            var formattedBirthday = rawBirthday.getMonth() + 1 + '/' + rawBirthday.getDate() + '/' + rawBirthday.getFullYear();

            return (
                <Player 
                    key={player.id}
                    name={player.name}
                    image={player.image}
                    url={player.url}
                    birthDate={formattedBirthday}
                    seasonsPlayed={player.seasonsPlayed}
                    position={player.position}
                    weight={player.weight}
                    height={player.height}
                    gamesPlayed={numberWithCommas(player.gamesPlayed)}
                    minutesPlayed={numberWithCommas(player.minutesPlayed)}
                    minutesPerGame={player.minutesPerGame}
                    points={numberWithCommas(player.points)}
                    pointsPerGame={player.pointsPerGame}
                    steals={player.steals}
                    assists={numberWithCommas(player.assists)}
                    assistsPerGame={player.assistsPerGame}
                    rebounds={numberWithCommas(player.rebounds)} 
                    reboundsPerGame={player.reboundsPerGame}
                />
            )
        });
        
    return (
        <div className="player-grid">
            {renderPlayers}
        </div>
        
    )
};