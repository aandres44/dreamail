import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, Redo, Settings } from '@material-ui/icons'
import React from 'react'
import { EmailRow } from '../EmailRow/EmailRow'
import Section from '../Section/Section'
import "./EmailList.css"

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList-settings">
                <div className="emailList-settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList-settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>

            </div>
            <div className="emailList-sections">
                <Section Icon={Inbox} title="Prioritarios" color="red" selected />
                <Section Icon={Inbox} title="Social" color="blue" selected />
                <Section Icon={Inbox} title="Ofertas" color="green" selected />
            </div>

            <div className="emailList-list">
                <EmailRow
                    title="Twitch"
                    subject="Hey fellow streamer!!!"
                    description="This is a test"
                    time="10pm"
                >

                </EmailRow>
            </div>
        </div>
    )
}

export default EmailList
