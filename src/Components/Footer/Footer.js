import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer-grid">
            <div></div>
            <div className="footer-copyright-row">
                <img
                    src="copyright.png"
                    alt="copyright"
                    className="footer-copyright"
                />
            </div>
            <div className="footer-social-row">
                <img
                    src="social.png"
                    alt="social"
                    className="footer-social"
                />
            </div>
        </div>
    )
}