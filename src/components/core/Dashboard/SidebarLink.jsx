import React from 'react'
import * as Icons from "react-icons/vsc"
import { NavLink, matchPath, useLocation } from 'react-router-dom';

const SidebarLink = ({link, iconName}) => {

    const Icon = Icons[iconName];
    const location  = useLocation();

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }


  return (
    <NavLink
    to={link.path}
    className={ `relative tracking-wide px-8 py-2 text-sm text-richblack-300 font-medium ${matchRoute(link.path) ? "bg-yellow-800 text-yellow-50" : "bg-opacity-0"}`}
    >

        <span className={`absolute left-0 top-0 h-full w-[0.2rem] 
        ${matchRoute(link.path) ? "bg-yellow-50" : "opactity-0"}`}>

        </span>

        <div className='flex item-center gap-x-2'>

            <Icon className="text-lg" />
            <span>{link.name}</span>
        </div>
    </NavLink>
  )
}

export default SidebarLink
