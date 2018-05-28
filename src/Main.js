import React from 'react'

import List from "./List"
import Deets from "./Deets"
import Toolbar from "./Toolbar"

class Main extends React.Component{
    render(){
        return (
            <div className="Main" >
               <div className="Toolbar">
                   <Toolbar />
                </div>
                <div className = "Content" style={style}>
               <List />
               <Deets />
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