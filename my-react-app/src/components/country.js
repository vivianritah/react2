import React from "react";
import { Region } from "./region";


function Country(){
    const regions= [{name: "Western", districts:5, village: 2000},
        {name: "Eastern", districts: 7, village: 2000},
        {name: "Central", districts: 10, population: 10000},
        {name: "Northern", districts: 5, population: 5000}
    ]
    return (
        <div>
            <p>A list of regions in my country</p>
            <ul>
                {regions.map((regions)=><Region name={regions.name} districts={regions.districts} population={regions.population}/>)}
            </ul>
        </div>
    )

}
export default Country;