import React from 'react'

import List from "./List"
import Deets from "./Deets"
import Toolbar from "./Toolbar"

class Main extends React.Component{
    constructor(){
        super();
    this.state={
        locationsArray : [
            {id:1 , title:"l1", rating: "7", notes:"nice architecture" },
            {id:2,title:"l2", rating: "3", notes:"has good food around it" },
            {id:3 ,title:"l3", rating: "5", notes:"good place" },
            {id:1 , title:"l1", rating: "10", notes:"nice architecture" },],

        currentLocation: this.blankLocation(),

    }
    }

    setCurrentLocation =(location) => {
        this.setState({currentLocation: location});
    }

    resetCurrentLocation = () => {
        this.setCurrentLocation(this.blankLocation())
    }

    blankLocation = () => {
        return {id: null, title: "", rating: "", notes: "" } 
    }

    saveLocation = (location) => {
        const locationsArray = [...this.state.locationsArray]
        const i = locationsArray.findIndex(currentLocation => currentLocation.id === location.id)
        locationsArray[i] = location;
        this.setState({locationsArray, currentLocation: location})
        
    }

    render(){
        return (
            <div className="Main" >
               <div className="Toolbar">
                   <Toolbar resetCurrentLocation={this.resetCurrentLocation}/>
                </div>
                <div className = "Content" style={style}>
                    <List locationsArray={this.state.locationsArray} 
                          setCurrentLocation={this.setCurrentLocation}
                    />
                    <Deets currentLocation={this.state.currentLocation} 
                           saveLocation={this.saveLocation}
                    />
               </div>
            </div>
        );
    }
}

const style = {
  display: "flex",
  height: "100vh",
  alignItems: "stretch",

}

export default Main