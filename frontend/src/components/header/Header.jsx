import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='min-w-screen top-0 z-10 mb-4'>
            <nav className="flex items-center justify-center md:w-4/5 m-auto border border-slate-500 rounded-xl text-sans w-11/12">
                <ul className="items-center space-x-6 my-1 flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">Edit year</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/topic"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">Topics</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/sector"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">Sector</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/region"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">Region</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/pest"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">PEST</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/source"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">Source</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/swort"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">SWORT</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/country"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">Country</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/city"
                        className={({ isActive }) =>
                            `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                            <span className="lg:inline">City</span>
                        </li>
                    </NavLink>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Header