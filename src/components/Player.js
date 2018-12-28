import React from 'react';


class Player extends React.Component {
    
    getSeasons() {
        if (this.props.seasonsPlayed === 1) {
            return this.props.seasonsPlayed + " season"
        } else {
            return this.props.seasonsPlayed + " seasons"
        }
    }
    
    render() {
        return (
            <div className="player">
                <div className="header">
                    <div className="header-left">
                        <h3 className="player-name" >{this.props.name}</h3>
                        <p className="birthday">{this.props.birthDate}</p>
                        <p className="seasons-played">{this.getSeasons()}</p>
                        <p className="position">{this.props.position}</p>
                        <div className="weight-height">
                            <p className="weight">{this.props.weight} lbs.</p>
                            <p className="height">{this.props.height}</p>
                        </div>
                    </div>
                    <div className="header-right">
                        <img src={this.props.image ? this.props.image : require('../img/unknown.png')} width="100" alt={this.props.name} />
                    </div>
                </div>
                <div className="player-stats">
                    <div className="stats-left">
                        <div className="games">
                            <p className="label">Games Played:</p>
                            <p className="stat">{this.props.gamesPlayed}</p>
                        </div>
                        <div className="minutes">
                            <div className="total">
                                <p className="label">Minutes Played:</p>
                                <p className="stat">{this.props.minutesPlayed}</p>
                            </div>
                            <div className="pg">
                                <p className="label pergame">MPG:</p>
                                <p className="stat pergame">{this.props.minutesPerGame}</p>  
                            </div>
                        </div>
                        <div className="points">
                            <div className="total">
                                <p className="label">Total Points:</p>
                                <p className="stat">{this.props.points}</p>
                            </div>
                            <div className="pg">
                                <p className="label pergame">PPG:</p>
                                <p className="stat pergame">{this.props.pointsPerGame}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stats-right">
                        <div className="steals">
                            <p className="label">Steals:</p>
                            <p className="stat">{this.props.steals}</p>
                        </div>
                        <div className="rebounds">
                            <div className="total">
                                <p className="label">Rebounds:</p>
                                <p className="stat">{this.props.rebounds}</p>
                            </div>
                            <div className="pg">
                                <p className="label pergame">RPG:</p>
                                <p className="stat pergame">{this.props.reboundsPerGame}</p>
                            </div>
                        </div>
                        <div className="assists">
                            <div className="total">
                                <p className="label">Assists:</p>
                                <p className="stat">{this.props.assists}</p>
                            </div>
                            <div className="pg">
                                <p className="label pergame">APG:</p>
                                <p className="stat pergame">{this.props.assistsPerGame}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a href={"https://basketball-reference.com" + this.props.url} className="stat-link">VIEW STATS</a>
                </div>
            </div>
        )
        
    }
};

export default Player;