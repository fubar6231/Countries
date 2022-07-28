import React from 'react';

function Search(props) {
    return (
        <div>
            <input type={"text"} onChange={(event )=> {props.onInput(event.target.value)}} placeholder={"Search for country"}/>
        </div>
    );
}

export default Search;