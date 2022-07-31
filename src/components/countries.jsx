import React from "react";
import axios from "axios";
import {BrowserRouter as Router, Route} from "react-router-dom";

import RoutedCountry from "./routedCountry";
import Country from "./country";
import NavBar from "./navBar";



class Countries extends React.Component {

    state = {
        countries: [],
        country: "",
        region: ""
    }


    handleSearch = (input) => {
        this.setState({country: input})
    }

    handleFilter = (input) => {
        this.setState({region: input})
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all').then(object => {
            this.setState({countries: object.data})
        }).catch(error => console.log(error))
    }

    render() {
        const filters = this.state.countries.filter((country) => {
            if (country.region.toLowerCase() === this.state.region.toLowerCase()) {
                return country
            } else if (this.state.region === "") {
                return country
            }
        }).filter((country) => {
            if (country.name.official.toLowerCase().includes(this.state.country.toLowerCase())) {
                return country
            } else if (this.state.country === "") {
                return country
            }
        })


        let finalElement
        if (filters.length === 0) {
            finalElement = <h1>No such Country</h1>
        } else {
            finalElement = filters.map(country => {
                return (<Country key={country.name.official} country={country}/>)
            })
        }

        return (
            <Router>
                <div>
                    <Route exact path="/">
                        <NavBar onInput={this.handleSearch} onFilter={this.handleFilter}
                                countryData={this.state.countries}/>
                        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                            {finalElement}
                        </div>
                    </Route>
                    <Route path="/:countryName">
                        <RoutedCountry/>
                    </Route>
                </div>
            </Router>
        )

    }
}

export default Countries

