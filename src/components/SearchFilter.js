import React from 'react';

class SearchFilter extends React.Component {
    
    filterUpdate() {
        const val = this.teamValue.value;
        // console.log(val);
        this.props.filterTextUpdate(val);
        
    }
    
    render() {
        return (
            <div className="top-filter">
                <form>
                    <input
                        type="text"
                        tabIndex="1"
                        id="search-input"
                        placeholder="Search for player..."
                        ref={ (value) => {this.teamValue = value} }
                        onChange={this.filterUpdate.bind(this)}
                    />
                </form>
            </div>
        )
    };
}

export default SearchFilter;