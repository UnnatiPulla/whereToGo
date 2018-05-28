import React from "react"
import "./List.css"

import Location from "./Location"

const List = () => {
  const locationsArray=[{id:1 ,
  title:"l1", rating: 4 },{id:2,
    title:"l2", rating: 4 },{id:3 ,
      title:"l3", rating: 4 }]
  
return (
    <div className ="List"> 
    <h1>Locations</h1>
      <ul id="locations">{
        locationsArray.map(location => (<Location key ={location.id} location={location}/>
          ))
      }
      </ul>
    </div>
);
}

export default List