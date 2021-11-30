import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import "./SendMail.css"


function SendMail() {
    const environment = "http://127.0.0.1:5000/mail/send"
    const { register, handleSubmit, watch, errors } = useForm()
    //const news;
    const [mail, setMail] = useState()
    const history = useNavigate();
    

    const onSubmit = (tmp) => {
        let formData = tmp
        formData.message = "Subject: " + formData.subject + " \n\n " + " " + formData.message
        formData["from"] = "prueba.de.web.eduardo@gmail.com"
        formData["password"] = "Me294?83"
        delete formData["subject"]
        console.log(formData)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "from":"prueba.de.web.eduardo@gmail.com",
                "to":formData.from,
                "password":"Me294?83",
                "message":formData.message
            })
        };

        fetch(environment, requestOptions)
            .then(res => res.json())
            .then(json => setMail(json))
    }

    return (
        <div className={"sendMail" /*+ news && "sendMail-off"*/}>
            <div className="sendMail-header">
                <h3>Nuevo Correo</h3>
                <Close className="sendMail-close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Para"
                    type="text"
                    {...register('to', { required: true })}
                />
                <input
                    placeholder="Asunto"
                    type="text"
                    {...register('subject', { required: true })}
                />
                <input
                    placeholder="Mensaje"
                    type="text"
                    className="sendMail-message"
                    {...register('message', { required: true })}
                />
                <div className="sendMail-options">
                    <Button
                        className="sendMail-send"
                        variant="container"
                        color="primary"
                        type="submit"
                    >
                        Enviar
                    </Button>
                </div>
            </form>

        </div>
    )
}


export default SendMail
