import React from 'react';

class SearchFilter extends React.Component {
    
    filterUpdate() {
        const val = this.myValue.value;
        // console.log(val);
        this.props.filterUpdate(val);
        
    }
    
    render() {
        return (
            <div className="top-filter">
                <form>
                    <input type="text" id="search-input" tabindex="1" ref={ (value) => {this.myValue = value} } placeholder="Type to filter..." onChange={this.filterUpdate.bind(this)}/>
                </form>
            </div>
        )
    };
}

export default SearchFilter;