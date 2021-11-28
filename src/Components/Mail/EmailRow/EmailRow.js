import React from 'react'
import "./EmailRow.css"
import Checkbox from "@material-ui/core/Checkbox"
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { useNavigate } from "react-router-dom"

export const EmailRow = ({ id, title, subject, description, time }) => {
    const history = useNavigate();

    return (
        <div onClick={() => history("/mail")} className="emailRow">
            <div className="emailRow-options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>

            <h3 className="emailRow-title">{title}</h3>

            <div className="emailRow-message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow-description">-
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow-time">{time}</p>
        </div>
    )
}
