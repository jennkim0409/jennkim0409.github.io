import React, {useState} from 'react';
import * as BiIcons from "react-icons/bi";
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
      <>
      <IconContext.Provider value={{color: '#f6e0e0'}}>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
                <BiIcons.BiListUl onClick={showSidebar}/> 
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <BiIcons.BiX />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </IconContext.Provider>          
      </>
    )
}

export default Navbar