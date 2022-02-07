import React from "react"
import TopBar from "../components/TopBar.js"


export default function MeetOriion() {
    return (
        <div className="meet-oriion">
            <TopBar />
            <div className="meet-oriion--body body">
                <div>
                    <h1 className="meet-oriion--header"><span className="lightest-text">meet</span> oriion</h1>
                    <div className="meet-oriion--tagline-div">Your online course accountability buddy</div>
                    <a className="button button-link meet-oriion--button" href="src/pages/CoursePicker.js">Let's get started</a>
                </div>
            </div>
        </div>
    )
}