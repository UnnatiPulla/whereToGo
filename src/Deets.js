import React from "react"
import "./Deets.css"

const Deets = ({currentLocation}) =>{
return (
    <div className ="Deets">
        <div className="actions">
            <button type="button">
                <i className="far fa-minus-square"></i>
            </button>
        </div>
        <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="New Location"
                value={currentLocation.title}
              />
              
              <input type="numbers" name="rating" placeholder="My Rating" value={currentLocation.rating}/>
            </p>
            <textarea name="notes" placeholder="My Notes" value={currentLocation.title}></textarea>
        </form>
    </div>
);
}

export default Deets