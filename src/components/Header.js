import React, { Component } from 'react';


export class Header extends Component {
  
    
    render() {
        return (
        <header className="app-header">
            <img src={require(`../img/${this.props.filterTeam}-logo.png`)}
                alt="logo"
                className="header-logo"
            />   
        </header>
        )
    }
};

export default Header;
