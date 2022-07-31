import React from 'react';



function Filter(props) {
    const regions = props.countryData.reduce((acc,current)=>{
        acc.add(current.region)
        return acc
    },new Set())

    return (
        <div>
            <select onChange={event => {props.onFilter(event.target.value)}}>
                <option key={"none"} value={""}>Filter</option>
                {[...regions].map((region)=>{return <option key={region} value={region}>{region}</option>})}
            </select>
        </div>
    );
}

export default Filter;