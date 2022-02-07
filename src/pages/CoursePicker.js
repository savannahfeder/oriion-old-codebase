import React from "react"
import TopBarPageSpecific from "../components/TopBarPageSpecific.js"


export default function CoursePicker() {
    return (
        <div className="course-picker">
            <TopBarPageSpecific page="Course" />
            <div className="course-picker--container">
                <p className="bold course-picker--prompt">Which course do you want to be kept accountable on?</p>

                <form form_id="course-picker--form">
                    <label for="course-picker--form" className="small-light label">Course Name</label>
                    <br/>
                    <input className="input-field" type="text" id="course-picker--name" name="course-picker--name" />
                    <br/>
                    <label for="course-picker--form" className="small-light label">Course URL</label>
                    <br/>
                    <input className="input-field" type="text" id="course-picker--url" name="course-picker--url" />
                    <br/>
                    <input className="button form-button" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}