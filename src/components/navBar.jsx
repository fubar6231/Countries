import React, {Component} from 'react';

import Search from "./search";
import Filter from "./filter";


class NavBar extends Component {

    render() {
        return (
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <h1>Countries</h1>
                <Search onInput={this.props.onInput} />
                <Filter onFilter={this.props.onFilter} countryData={this.props.countryData}/>
            </div>
        );
    }
}

export default NavBar;