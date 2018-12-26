import React from 'react';

class PositionFilter extends React.Component {
    
    state = {
        position: ''
    }

    positionUpdate = (e) => {
        this.setState({
            position: e.target.value
        });
        this.props.positionFilterUpdate(e.target.value);
    }

   
    render() {
        return (
            <div className="position-filter">
                <select
                    id="position-dropdown"
                    defaultValue={this.state.position}
                    onChange={this.positionUpdate.bind(this)}
                >
                    <option value="">All</option>
                    <option value="PG">PG</option>
                    <option value="SG">SG</option>
                    <option value="SF">SF</option>
                    <option value="PF">PF</option>
                    <option value="C">C</option>
                </select>
            </div>
        )
    };
}

export default PositionFilter;