import React, {Component} from 'react';


class Country extends Component {
    render() {
        return (
            <div style={{width:"20%",margin:10}}>
                <img style={{width:"100%"}} src={this.props.country.flags.svg} alt={"countryFlag"}/>
                <p style={{display:"flex",justifyContent:"center"}}>{this.props.country.name.official}</p>
            </div>
        );
    }
}

export default Country;