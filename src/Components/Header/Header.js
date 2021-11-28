import { Avatar, Icon, IconButton } from '@material-ui/core'
import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img
                    src=""
                />
            </div>
            <div className="header-middle">
                <Search />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDown className="header-input" />
            </div>
            <div className="header-right">
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <Avatar />
            </div>
            
        </div>
    )
}

export default Header
