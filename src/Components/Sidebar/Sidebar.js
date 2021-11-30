import { Button } from '@material-ui/core'
import { Add, ExpandMore, Inbox, LabelImportant, NearMe, Note, Star } from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'

function Sidebar() {
    
    function test() {

    }

    return (
        <div className="sidebar">
            <Button 
                startIcon={<Add fontSize="large" />}
                className="sidebar-compose"
                onClick={test}
            >
                Redactar
            </Button>
            
            <SidebarOption 
                Icon={Inbox}
                title="Inbox"
                number={54} selected={true}
            />
            <SidebarOption 
                Icon={Star}
                title="Favoritos"
                number={54}
            />
            <SidebarOption 
                Icon={LabelImportant}
                title="Importante"
                number={54}
            />
            <SidebarOption 
                Icon={NearMe}
                title="Enviado"
                number={54}
            />
            <SidebarOption 
                Icon={Note}
                title="Borradores"
                number={54}
            />
            <SidebarOption 
                Icon={ExpandMore}
                title="Mas"
                number={54}
            />
        </div>
    )
}

export default Sidebar
