import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './SideBarData'
import { IconContext } from 'react-icons'
import './Navbar.scss'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: 'rgb(136, 136, 136)' }}>
                <div className="navbar">
                    <NavLink className="menu-bars" to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavLink>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            return (
                                <>
                                    <li className={item.cName} key={index}>
                                        <NavLink
                                            className="nav-menu-link"
                                            to={item.path}
                                        >
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </li>
                                </>
                            )
                        })}

                        <li className="nav-menu-item">
                            <h3 className="nav-menu-title">Subscriptions</h3>
                        </li>

                        <li className="nav-menu-item">
                            <NavLink
                                className="nav-menu-link__sub nav-menu-link__sub--1 "
                                to={'/channel'}
                            >
                                <span className="nav-menu-span">
                                    Gussie Singleton
                                </span>
                            </NavLink>
                        </li>

                        <li className="nav-menu-item">
                            <NavLink
                                className="nav-menu-link__sub nav-menu-link__sub--2"
                                to={'/channel'}
                            >
                                <span className="nav-menu-span">
                                    Nora Francis
                                </span>
                            </NavLink>
                        </li>

                        <li className="nav-menu-item">
                            <NavLink
                                className="nav-menu-link__sub nav-menu-link__sub--3"
                                to={'/channel'}
                            >
                                <span className="nav-menu-span">
                                    Belle Briggs
                                </span>
                            </NavLink>
                        </li>

                        <li className="nav-menu-item">
                            <NavLink
                                className="nav-menu-link__sub nav-menu-link__sub--4"
                                to={'/channel'}
                            >
                                <span className="nav-menu-span">
                                    Eunice Cortez
                                </span>
                            </NavLink>
                        </li>

                        <li className="nav-menu-item">
                            <NavLink
                                className="nav-menu-link__sub nav-menu-link__sub--5"
                                to={'/channel'}
                            >
                                <span className="nav-menu-span">
                                    Emma Hanson
                                </span>
                            </NavLink>
                        </li>

                        <li className="nav-menu-item">
                            <NavLink
                                className="nav-menu-link__sub nav-menu-link__sub--6"
                                to={'/channel'}
                            >
                                <span className="nav-menu-span">
                                    GLeah Berry
                                </span>
                            </NavLink>
                        </li>

                        <li className="nav-menu-item">
                            <span className="nav-menu-span-settings">
                                Settings
                            </span>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
