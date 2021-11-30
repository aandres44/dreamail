import { Button } from '@material-ui/core'
import { Add, ExpandMore, Inbox, LabelImportant, NearMe, Note, Star } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'

function Sidebar() {

    const history = useNavigate();

    function test() {

    }

    return (
        <div className="sidebar">
            <Button
                className="sidebar-compose"
                onClick={() => history("/news")}
            >
                Noticias
            </Button>
            <SidebarOption
                Icon={Star}
                title="Favs"
                number={120}
                
            />

            <SidebarOption
                Icon={Inbox}
                title="Inbox"
                number={54} selected={true}
            />
            <SidebarOption
                Icon={LabelImportant}
                title="Importante"
                
            />
            <SidebarOption
                Icon={NearMe}
                title="Enviado"
                
            />
            <SidebarOption
                Icon={Note}
                title="Borradores"
                
            />
            <SidebarOption
                Icon={ExpandMore}
                title="Mas"
                
            />
        </div>
    )
}

export default Sidebar
