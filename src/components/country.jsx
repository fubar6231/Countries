import React, {Component} from 'react';
import Countries from "./countries";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import RoutedCountry from "./routedCountry";


class Country extends Component {
    render() {
        return (
            <Link style={{
                display: "flex",
                flexWrap: "wrap",
                width:"20%",
                justifyContent: "space-evenly"
            }} to={`/${this.props.country.cca3}`}>
                <div style={{
                    width: "100%",
                    margin: 10,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}>
                    <img style={{width: "100%"}} src={this.props.country.flags.svg} alt={"countryFlag"}/>
                    <p style={{display: "flex", justifyContent: "center"}}>{this.props.country.name.official}</p>
                </div>
            </Link>
        );
    }
}

export default Country;