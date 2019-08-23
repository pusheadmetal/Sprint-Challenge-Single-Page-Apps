import React from "react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
const TabExampleBasic = (props) => {


    /*const panes = [
        { menuItem: 'Home', render: () => <Tab.Pane></Tab.Pane> },
        { menuItem: 'Characters', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Locations', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ];*/

    return (

        <div class="ui menu">
            <NavLink to = "/" className="item">Home</NavLink>
            <NavLink to = "/characters" className="item">Characters</NavLink>
            <NavLink to = "/episodes" className="item">Episodes</NavLink>
            <NavLink to = "/locations" className="item">Locations</NavLink>
        </div>

    );
    
    
}

export default TabExampleBasic

