import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    render() {
        return (
            <div className="search-background">
               <input type="text" value={this.state.search} />
               <button className="submit">Submit</button>
            </div>
        );
    }
}

export default Search;