import React from 'react';
import Player from './Player';

data = require('./celtics.json');

data.forEach(function(player) {
    console.log(player.name,player.totalPoints);
});

// Get total points & average points per player
points = 0
players = 0
data.forEach(function(player) {
    players += 1;
    points += player.totalPoints;
    console.log(player.name,player.totalPoints);
});

// console.log(`Total: ${Math.round(points)}`);
// console.log(`Average: ${points / players}`);

data.forEach(function(player) {
    celtics[player.id] = new Player(player.id,
        player.name,
        player.url,
        player.from,
        player.to,
        player.yearsPlayed,
        player.position,
        player.shoots,
        player.birthDate,
        player.height,player.weight,
        player.gamesPlayed,player.minutesPlayed,
        player.totalPoints,player.pointsPerGame)

})

