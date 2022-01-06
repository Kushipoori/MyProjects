import React from 'react'
import './style.css'
import { SidebarData } from '../assets/sidebarData'

const SideBar = () => {
    return (
        <div className='sidebar-conatiner'>
            <div className='sidebar-items'>
                <ul className='menu-list'>
                    {SidebarData.map(item =><a href={item.path}><li  className='list-items'>{item.icon}</li></a>)

                    }
                </ul>
        

            </div>
            
        </div>
    )
}

export default SideBar
