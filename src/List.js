import React from "react"
import "./List.css"

import Location from "./Location"

const List = ({locationsArray, setCurrentLocation}) => {
  
return (
    <div className ="List"> 
    <h1>Locations</h1>
      <ul id="locations">{
        locationsArray.map(location => (<Location key ={location.id} location={location} setCurrentLocation={setCurrentLocation}/>
          ))
      }
      </ul>
    </div>
);
}

export default List