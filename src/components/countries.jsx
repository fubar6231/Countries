import countries from "../countries.json"
import React from "react";
import Country from "./country";
import NavBar from "./navBar";

class Countries extends React.Component {
    constructor() {
        super();
        this.result = []
        this.state = {
            countries: countries,
            country: "",
            region: ""
        }
    }

    filters=()=>{this.result=this.state.countries.filter((country) => {
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
    })}


    handleSearch = (input) => {
        this.setState({country: input})
    }

    handleFilter = (input) => {
        this.setState({region: input})
    }

    render() {
        this.filters()
        let finalElement
        if(this.result.length===0){
            finalElement= <h1>No such Country</h1>
        }else {
            finalElement=this.result.map(country => {
                return <Country key={country.name.common} country={country}/>
            })
        }

        return (
            <div>
                <NavBar onInput={this.handleSearch} onFilter={this.handleFilter}/>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    {finalElement}
                </div>
            </div>
        )

    }
}

export default Countries
