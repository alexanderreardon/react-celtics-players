import React from 'react';
import Player from './Player';

const playerData = require('../data/celtics.json');

export default ( {filterText} ) => {
    
    const renderPlayers = playerData
        .filter((player) => {
            return player.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
        })
        .map((player) => {
            var rawBirthday = new Date(player.birthDate);
            var formattedBirthday = rawBirthday.getMonth() + 1 + '/' + rawBirthday.getDate() + '/' + rawBirthday.getFullYear();

            return (
            <Player  key={player.id} name={player.name} image={player.image} url={player.url} birthDate={formattedBirthday} seasonsPlayed={player.seasonsPlayed}  position={player.position}  weight={player.weight} height={player.height} gamesPlayed={player.gamesPlayed} minutesPlayed={player.minutesPlayed} minutesPerGame={player.minutesPerGame} points={player.points} pointsPerGame={player.pointsPerGame} steals={player.steals} assists={player.assists} assistsPerGame={player.assistsPerGame} rebounds={player.rebounds} reboundsPerGame={player.reboundsPerGame}  />
            )
    });
        
    return (
        <div className="player-grid">
            {renderPlayers}
        </div>
        
    )
};