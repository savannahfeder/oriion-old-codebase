import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import WeekdayBlock from "./WeekdayBlock";
import WeekdayInput from "./WeekdayInput";

//TODO: refactor schedule blocks and input fields into components to make less repetitive
export default function Schedule(props) {
  const [sundaySelected, setSundaySelected] = useState(false);
  const [mondaySelected, setMondaySelected] = useState(false);
  const [tuesdaySelected, setTuesdaySelected] = useState(false);
  const [wednesdaySelected, setWednesdaySelected] = useState(false);
  const [thursdaySelected, setThursdaySelected] = useState(false);
  const [fridaySelected, setFridaySelected] = useState(false);
  const [saturdaySelected, setSaturdaySelected] = useState(false);

  let history = useHistory();
  const handleScheduleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    console.log(props.data);
    history.push("/");
  };

  const handleToggle = (e, weekday) => {
    toggleStyling(e);
    //set state of [weekdaySelec†ed] depending on weekday
    //TODO: change styling [google conditional styling in React]
    if (weekday === "sunday") {
      setSundaySelected((prevState) => !prevState);
    } else if (weekday === "monday") {
      setMondaySelected((prevState) => !prevState);
    } else if (weekday === "tuesday") {
      setTuesdaySelected((prevState) => !prevState);
    } else if (weekday === "wednesday") {
      setWednesdaySelected((prevState) => !prevState);
    } else if (weekday === "thursday") {
      setThursdaySelected((prevState) => !prevState);
    } else if (weekday === "friday") {
      setFridaySelected((prevState) => !prevState);
    } else if (weekday === "saturday") {
      setSaturdaySelected((prevState) => !prevState);
    }
  };

  const toggleStyling = (e) => {
    const element = e.target;
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    } else {
      element.classList.add("selected");
    }
  };

  return (
    <div className="schedule-component">
      <ul className="schedule background-div">
        <WeekdayBlock weekday="sunday" text="S" handleToggle={handleToggle} />
        <WeekdayBlock weekday="monday" text="M" handleToggle={handleToggle} />
        <WeekdayBlock weekday="tuesday" text="T" handleToggle={handleToggle} />
        <WeekdayBlock
          weekday="wednesday"
          text="W"
          handleToggle={handleToggle}
        />
        <WeekdayBlock weekday="thursday" text="T" handleToggle={handleToggle} />
        <WeekdayBlock weekday="friday" text="F" handleToggle={handleToggle} />
        <WeekdayBlock weekday="saturday" text="S" handleToggle={handleToggle} />
      </ul>
      <ul class="daily-schedule-inputs">
        {sundaySelected && <WeekdayInput weekday="Sunday" />}
        {mondaySelected && <WeekdayInput weekday="Monday" />}
        {tuesdaySelected && <WeekdayInput weekday="Tuesday" />}
        {wednesdaySelected && <WeekdayInput weekday="Wednesday" />}
        {thursdaySelected && <WeekdayInput weekday="Thursday" />}
        {fridaySelected && <WeekdayInput weekday="Friday" />}
        {saturdaySelected && <WeekdayInput weekday="Saturday" />}
      </ul>
      {(sundaySelected ||
        mondaySelected ||
        tuesdaySelected ||
        wednesdaySelected ||
        thursdaySelected ||
        fridaySelected ||
        saturdaySelected) && (
        <button onClick={handleScheduleSubmit} className="schedule--button">
          Submit
        </button>
      )}
    </div>
  );
}
