import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="admin-bar">
    
            
            <div className="center">
                <ul className="list">
                    
                    
                    <li> <Link to="/addtop" activeClassName="active"><p>Add Top</p></Link></li>
                    <li><Link to="/addall" activeClassName="active"><p>Add All </p></Link></li>
                    
                </ul>
            </div>
    
        </div>
      )
}

export default Navbar