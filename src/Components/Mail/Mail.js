import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import "./Mail.css"

function Mail() {
    const history = useNavigate()
    const location = useLocation()
    
    return (
        <div className="mail">
            <div className="mail-tools">
                <div className="mail-tools-left">
                    <IconButton onClick={() => history("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail-tools-right">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail-body">
                <div className="mail-body-header">
                    <h2>{location.state.subject}</h2>
                    <LabelImportant className="mail-important"/>
                    <p>{location.state.title}</p>
                    <p className="mail-time">{location.state.time}</p>
                </div>
                <div className="mail-message">
                    <p>{location.state.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail