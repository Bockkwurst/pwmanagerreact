import React, {useState, useEffect} from "react";
import './pagesCss/startpage.css'

function StartPage(){


    return(
        <div>
            <div>
            <h1 className="title">Willkommen beim Passwort Manager</h1>
            <pre className="description">
                Hier können Sie ihre Passwörter sicher und einfach speichern und bearbeiten.<br/>
                Einfach registrieren oder einloggen.
            </pre>
            </div>
            <div className="info-box">
            <pre>
                Hier stehen infos über updates ect.
            </pre>
            </div>
        </div>

    )
}

export default StartPage;