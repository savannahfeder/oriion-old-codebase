import React from "react"

export default function Schedule() {
    function submitSchedule() {
        console.log("I'm clicked!")
    }
    
    function openSunday() {
        toggleCorrectWeekday("sunday-input");
    }
    
    function openMonday() {
        toggleCorrectWeekday("monday-input");
    }
    
    function openTuesday() {
        toggleCorrectWeekday("tuesday-input");
    }
    
    function openWednesday() {
        toggleCorrectWeekday("wednesday-input");
    }
    
    function openThursday() {
        toggleCorrectWeekday("thursday-input");
    }
    
    function openFriday() {
        toggleCorrectWeekday("friday-input");
    }
    
    function openSaturday() {
        toggleCorrectWeekday("saturday-input");
    }
    
    function toggleCorrectWeekday(className) {
        const inputElement = document.getElementById(className);
        
        inputElement.classList.toggle("hidden"); //sunday-input refers to the id's of the 
        // weekDivElement.style.visibility = "hidden";
        const weekDivElement = document.querySelector("date-item"); //className + "-div"
        weekDivElement.classList.toggle("checked"); //TODO: make this change color of div
    }

    return (
        <div className="schedule-component">
            <ul className="schedule background-div">
                <li onClick={openSunday} className="date-item sunday-input-div">S</li>
                <li onClick={openMonday} className="date-item checked">M</li> 
                <li onClick={openTuesday} className="date-item">T</li>
                <li onClick={openWednesday} className="date-item checked">W</li>
                <li onClick={openThursday} className="date-item">T</li>
                <li onClick={openFriday} className="date-item checked">F</li>
                <li onClick={openSaturday} className="date-item">S</li>
            </ul>
            <ul class="daily-schedule-inputs">
                <li id="sunday-input" class="day-input hidden">
                    Sunday <input class="input-time" type="text" name="sunday-field-one" placeholder="8:30" /> to <input class="input-time" type="text" name="sunday-field-two" placeholder="10:30" /> 
                </li>
                <li id="monday-input" class="day-input hidden">
                    Monday <input class="input-time" type="text" name="monday-field-one" placeholder="8:30" /> to <input class="input-time" type="text" name="monday-field-two" placeholder="10:30" /> 
                </li>
                <li id="tuesday-input" class="day-input hidden">
                    Tuesday <input class="input-time" type="text" name="tuesday-field-one" placeholder="19:00" /> to <input class="input-time" type="text" name="tuesday-field-two" placeholder="21:00" /> 
                </li>
                <li id="wednesday-input" class="day-input hidden">
                    Wednesday <input class="input-time" type="text" name="wednesday-field-one" placeholder="19:00" /> to <input class="input-time" type="text" name="wednesday-field-two" placeholder="21:00" /> 
                </li>
                <li id="thursday-input" class="day-input hidden">
                    Thursday <input class="input-time" type="text" name="thursday-field-one" placeholder="8:30" /> to <input class="input-time" type="text" name="thursday-field-two" placeholder="10:30" /> 
                </li>
                <li id="friday-input" class="day-input hidden">
                    Friday <input class="input-time" type="text" name="friday-field-one" placeholder="8:30" /> to <input class="input-time" type="text" name="friday-field-two" placeholder="10:30" /> 
                </li>
                <li id="saturday-input" class="day-input hidden">
                    Saturday <input class="input-time" type="text" name="saturday-field-one" placeholder="8:30" /> to <input class="input-time" type="text" name="saturday-field-two" placeholder="10:30" /> 
                </li>
            </ul>
            <button onClick={submitSchedule} className="button">Submit</button>
        </div>
    )
}