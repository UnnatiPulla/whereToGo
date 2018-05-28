import React from 'react'

import List from "./List"
import Deets from "./Deets"
import Toolbar from "./Toolbar"

class Main extends React.Component{
    state={
        locationsArray : [
            {id:1 , title:"l1", rating: 4 },
            {id:2,title:"l2", rating: 4 },
            {id:3 ,title:"l3", rating: 5 }],

        currentLocation: {id: null, title:"", rating: 0 },

    }

    setCurrentLocation =(location) => {
        this.setState({currentLocation: location});
    }


    render(){
        return (
            <div className="Main" >
               <div className="Toolbar">
                   <Toolbar />
                </div>
                <div className = "Content" style={style}>
               <List locationsArray={this.state.locationsArray} setCurrentLocation={this.setCurrentLocation}/>
               <Deets currentLocation={this.state.currentLocation}/>
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