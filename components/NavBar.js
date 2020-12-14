import React from 'react';
import {Link} from "react-router-dom";



const NavBar=()=>{

    return (
        <nav className="navbar navbar-expand-lg">

            <div className="container">
            
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addnews">Add News </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/viewprofile">Your Profile </Link>
                        </li>
                        
                   
                    </ul>
                  
                </div>
            </div>

        </nav>
        
    );

}

export default NavBar;