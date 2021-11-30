import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, Redo, Settings } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { EmailRow } from '../EmailRow/EmailRow'
import Section from '../Section/Section'
import "./EmailList.css"

function EmailList() {

    const environment = "http://127.0.0.1:5000/mail?from=prueba.de.web.eduardo@gmail.com"
    const environmentOnline = "http://127.0.0.1:5000/mail/fetch"
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mails, setMails] = useState([]);

    useEffect(() => {
        fetch(environment)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMails(data["content"]);
                    console.log(mails)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error)
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

    }
    setIsLoaded(false);



    const reloadMails = () => {
        // const postOnline = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         "from": "prueba.de.web.eduardo@gmail.com",
        //         "password": "Me294?83",
        //         "date": "11-Nov-2021"
        //     })
        // };
        // fetch(environmentOnline, postOnline)
        //     .then(res => res.json())
        //     .then(
        //         (data) => {
        //             setIsLoaded(true);
        //             setMails(data["content"]);
        //         }
        //     )
    }

    return (
        <div className="emailList">
            <div className="emailList-settings">
                <div className="emailList-settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton onClick={reloadMails()}>
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

                {mails.map(mail => (
                    <EmailRow
                        title={mail.subject}
                        subject={mail.subject}
                        description={mail.content}
                        time={mail.date}
                        key={mail.id}
                    >

                    </EmailRow>
                ))}

                {/* <EmailRow
                    title="Twitch"
                    subject="Hey fellow streamer!!!"
                    description="This is a test"
                    time="10pm"
                >

                </EmailRow> */}
            </div>
        </div>
    )
}

export default EmailList
