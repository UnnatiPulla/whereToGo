import React from 'react'

import List from "./List"
import Deets from "./Deets"
import Toolbar from "./Toolbar"

import base from "./base"

class Main extends React.Component{
    constructor(){
        super();
    this.state={
        locationsArray : [],
        currentLocation: this.blankLocation(),

    }
    }

    componentWillMount(){
        base.syncState("locationsArray", {
            context: this,
            state: "locationsArray",
            asArray: true
        })
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

        if(location.id){
            const i = locationsArray.findIndex(currentLocation => currentLocation.id === location.id)
            locationsArray[i] = location;
        }
        else{
            location.id=Date.now()
            locationsArray.push(location);
        }
        this.setState({locationsArray, currentLocation: location})
        
    }

    removeCurrentLocation = (location) => {
        const locationsArray = [...this.state.locationsArray]
        const i = locationsArray.findIndex(location => location.id === this.state.currentLocation.id)
        if(i>-1){
        locationsArray.splice(i,1);
        this.setState({locationsArray});
        }
        this.resetCurrentLocation();
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
                           saveLocation={this.saveLocation} removeCurrentLocation={this.removeCurrentLocation}
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