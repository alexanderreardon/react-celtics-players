import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>All statistics are prior to the start of the 2018-19 season.
                <br />
                <a className="footer-source" href="https://www.basketball-reference.com/teams/BOS/players.html">Source with updated stats</a>
                </p>
            </footer>

        )
    }
}

export default Footer;