import React from 'react'

import List from "./List"
import Deets from "./Deets"
import Toolbar from "./Toolbar"

class Main extends React.Component{
    render(){
        return (
            <div className="Main">
               <Toolbar />
               <List />
               <Deets />
            </div>
        );
    }
}

export default Main