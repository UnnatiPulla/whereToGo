import React from "react"
import "./Deets.css"

const Deets = ({currentLocation, saveLocation, removeCurrentLocation}) =>{

const handleChanges = (ev) => {
   
    const location = {...currentLocation}
    location[ev.target.name] = ev.target.value;
    saveLocation(location);
    
}

return (
    <div className ="Deets">
        <div className="actions">
            <button type="button">
                <i className="far fa-minus-square" onClick={removeCurrentLocation}></i>
            </button>
        </div>
        <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="New Location"
                value={currentLocation.title}
                onChange = {handleChanges}
              />
              
              <select type="number" name="rating" placeholder="My Rating" value={currentLocation.rating} onChange = {handleChanges}>
                <option value = "1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value = "5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value = "9">9</option>
                <option value="10">10</option>
              </select>
            </p>
            <textarea name="notes" placeholder="My Notes" value={currentLocation.notes} onChange = {handleChanges}></textarea>
        </form>
    </div>
);
}

export default Deets