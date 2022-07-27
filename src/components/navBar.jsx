import React, {Component} from 'react';
import countries from "./countries";

class NavBar extends Component {

    getRegion=(countries)=>{
        countries.filter((country)=>{return (<option value={country.region}>country.region</option>)})
    }

    render() {
        return (
            <div>
            <h1>Search Here</h1>
                <select name="cars" id="cars">
                    this.
                </select>
            </div>
        );
    }
}

export default NavBar;