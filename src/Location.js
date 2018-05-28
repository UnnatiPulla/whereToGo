import React from "react"


const Location = ({location, setCurrentLocation}) => {
    const displayRating = (rating) => {
      var rate="";
      for(var i=0; i<rating; i++){
        rate = rate + "⭐";
      }
      return rate;
    }
        return(
        <li className="Location" onClick={() => setCurrentLocation(location)}>
              <div className="location">
                  <div className="location-title">
                    {location.title}
                  </div>
                  <div className="location-rating">
                    {displayRating(location.rating)}
                  </div>
              </div>
          </li>
        );
}



export default Location 