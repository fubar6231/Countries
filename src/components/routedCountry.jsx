
import React, {Component} from 'react';
import {Link} from "react-router-dom"
import axios from "axios";

class RoutedCountry extends Component {
    state = {countries: [], allCountries: [],url:""}


    componentDidMount() {
        const countryCode = window.location.href.split("/")[3]

        axios.get(`https://restcountries.com/v3.1/all`)
            .then(object => {
                this.setState({allCountries: object.data})
                return object.data.reduce((acc, current) => {
                    if (current.cca3 === countryCode) {
                        acc.push(current)
                        return acc
                    }
                    return acc
                }, [])
            }).then(result => {
                this.setState({countries: result})

            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.url !== this.state.url){
            const newCountry=this.state.allCountries.reduce((acc, current) => {
                if (current.cca3 === this.state.url) {
                    acc.push(current)
                    return acc
                }
                return acc
            }, [])
            this.setState({countries:newCountry})
        }
    }

    render() {

        if (this.state.countries.length !== 0) {
            let finalElement
            if(this.state.countries[0].borders){
                finalElement=this.state.countries[0].borders.map(country => {
                    return (<Link to={`/${country}`}>
                        <button key={country} onClick={e=>{this.setState({url:country})}}>{country}</button>
                    </Link>)
                })
            }else {
                finalElement=" No bordering countries"
            }
            return (
                <div style={{display: "flex", flexDirection: "column", padding: "10%"}}>
                    <Link to="/">
                        <button key={"back"} style={{width: "10%"}}>Back</button>
                    </Link>
                    <div style={{display: "flex", padding: "10%"}}>
                        <img style={{width: "50%", padding: "5%"}} src={this.state.countries[0].flags.svg}
                             alt={'flag_image'}/>
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <div>
                                <h1>{this.state.countries[0].name.official}</h1>
                                <p>Population : {this.state.countries[0].population}</p>
                                <p>Region : {this.state.countries[0].region}</p>
                                <p>Subregion : {this.state.countries[0].subregion}</p>
                                <p>Capital : {this.state.countries[0].capital.join(", ")}</p>
                                <p>Continents : {this.state.countries[0].continents.join(", ")}</p>
                                <p>Timezones : {this.state.countries[0].timezones.join(", ")}</p>
                            </div>
                            <div style={{width:'100%'}}>
                                Borders:
                                {finalElement}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default RoutedCountry;