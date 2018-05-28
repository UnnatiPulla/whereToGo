import React from "react"
import "./Deets.css"

const Deets = () =>{
return (
    <div className ="Deets">
        <div className="actions">
            <button type="button">
                <i class="far fa-minus-square"></i>
            </button>
        </div>
        <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="New Location"
              />
              
              <input type="numbers" name="rating" placeholder="My Rating"/>
            </p>
            <textarea name="notes" placeholder="My Notes"></textarea>
        </form>
    </div>
);
}

export default Deets