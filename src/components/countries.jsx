import countries from "../countries.json"
import React from "react";
import Country from "./country";
import NavBar from "./navBar";

class Countries extends React.Component {
    state={
        countries:countries
    }

    handleSearch=(input)=>{
        const countries= this.state.countries.filter((country)=>{if(country.region.toLowerCase().includes(input.toLowerCase())){return country}})
        this.setState({countries})
    }

    render() {
        return (
            <div>
                <NavBar onInput={this.handleSearch}/>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {this.state.countries.map(country => {
                        return <Country key={country.name.common} country={country}/>
                    })}
                </div>
            </div>
        )

    }
}

export default Countries
