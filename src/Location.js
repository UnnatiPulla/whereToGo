import React from "react"


const Location = ({location}) => {
    
        return(
        <li className="Location">
              <div className="location">
                  <div className="location-title">
                    {location.title}
                  </div>
                  <div className="location-rating">
                    {location.rating}
                  </div>
              </div>
          </li>
        );
}



export default Location 