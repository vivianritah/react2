import React from "react";

function Region( {name, districts, population}){
    return (
        <div>
            Region 1
            <h2>name:{name}</h2>
            <p>districts: {districts}</p>
            <p>population: {population}</p>
        </div>

    )
}


export {Region}