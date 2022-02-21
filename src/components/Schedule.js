import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

//TODO: refactor schedule blocks and input fields into components to make less repetitive
export default function Schedule(props) {
  const sundayRef = useRef();
  const mondayRef = useRef();
  const tuesdayRef = useRef();
  const wednesdayRef = useRef();
  const thursdayRef = useRef();
  const fridayRef = useRef();
  const saturdayRef = useRef();

  let history = useHistory();
  const handleScheduleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    console.log(props.data);
    history.push("/");
  };

  const toggleSelect = (e) => {
    const element = e.target;
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    } else {
      element.classList.add("selected");
    }
  };

  const handleToggle = (e) => {
    const element = e.target;
    //if not already selected, adds selected styling and makes correct input appear
    if (!element.classList.contains("selected")) {
      element.classList.add("selected");
      if (element.classList.contains("sunday")) {
        sundayRef.current.classList.remove("hidden");
      } else if (element.classList.contains("monday")) {
        mondayRef.current.classList.remove("hidden");
      } else if (element.classList.contains("tuesday")) {
        tuesdayRef.current.classList.remove("hidden");
      } else if (element.classList.contains("wednesday")) {
        wednesdayRef.current.classList.remove("hidden");
      } else if (element.classList.contains("thursday")) {
        thursdayRef.current.classList.remove("hidden");
      } else if (element.classList.contains("friday")) {
        fridayRef.current.classList.remove("hidden");
      } else if (element.classList.contains("saturday")) {
        saturdayRef.current.classList.remove("hidden");
      }
      //if already selected, removes selected styling and removes corresponding input fields
    } else {
      element.classList.remove("selected");
      if (element.classList.contains("sunday")) {
        sundayRef.current.classList.add("hidden");
      } else if (element.classList.contains("monday")) {
        mondayRef.current.classList.add("hidden");
      } else if (element.classList.contains("tuesday")) {
        tuesdayRef.current.classList.add("hidden");
      } else if (element.classList.contains("wednesday")) {
        wednesdayRef.current.classList.add("hidden");
      } else if (element.classList.contains("thursday")) {
        thursdayRef.current.classList.add("hidden");
      } else if (element.classList.contains("friday")) {
        fridayRef.current.classList.add("hidden");
      } else if (element.classList.contains("saturday")) {
        saturdayRef.current.classList.add("hidden");
      }
    }
  };

  return (
    <div className="schedule-component">
      <ul className="schedule background-div">
        <li onClick={handleToggle} className="date-item sunday">
          S
        </li>
        <li onClick={handleToggle} className="date-item monday">
          M
        </li>
        <li onClick={handleToggle} className="date-item tuesday">
          T
        </li>
        <li onClick={handleToggle} className="date-item wednesday">
          W
        </li>
        <li onClick={handleToggle} className="date-item thursday">
          T
        </li>
        <li onClick={handleToggle} className="date-item friday">
          F
        </li>
        <li onClick={handleToggle} className="date-item saturday">
          S
        </li>
      </ul>
      <ul class="daily-schedule-inputs">
        <li ref={sundayRef} class="day-input hidden">
          Sunday{" "}
          <input
            class="input-time"
            type="text"
            name="sunday-field-one"
            placeholder="hh:mm" //const fieldOnePlaceholder = props.sunday ? props.sunday.startTime : "hh:mm"
          />{" "}
          to{" "}
          <input
            class="input-time"
            type="text"
            name="sunday-field-two"
            placeholder="hh:mm"
          />
        </li>
        <li ref={mondayRef} class="day-input hidden">
          Monday{" "}
          <input
            class="input-time"
            type="text"
            name="monday-field-one"
            placeholder="hh:mm"
          />{" "}
          to{" "}
          <input
            class="input-time"
            type="text"
            name="monday-field-two"
            placeholder="hh:mm"
          />
        </li>
        <li ref={tuesdayRef} class="day-input hidden">
          Tuesday{" "}
          <input
            class="input-time"
            type="text"
            name="tuesday-field-one"
            placeholder="hh:mm"
          />{" "}
          to{" "}
          <input
            class="input-time"
            type="text"
            name="tuesday-field-two"
            placeholder="hh:mm"
          />
        </li>
        <li ref={wednesdayRef} class="day-input hidden">
          Wednesday{" "}
          <input
            class="input-time"
            type="text"
            name="wednesday-field-one"
            placeholder="hh:mm"
          />{" "}
          to{" "}
          <input
            class="input-time"
            type="text"
            name="wednesday-field-two"
            placeholder="hh:mm"
          />
        </li>
        <li ref={thursdayRef} class="day-input hidden">
          Thursday{" "}
          <input
            class="input-time"
            type="text"
            name="thursday-field-one"
            placeholder="hh:mm"
          />{" "}
          to{" "}
          <input
            class="input-time"
            type="text"
            name="thursday-field-two"
            placeholder="hh:mm"
          />
        </li>
        <li ref={fridayRef} class="day-input hidden">
          Friday{" "}
          <input
            class="input-time"
            type="text"
            name="friday-field-one"
            placeholder="hh:mm"
          />{" "}
          to{" "}
          <input
            class="input-time"
            type="text"
            name="friday-field-two"
            placeholder="hh:mm"
          />
        </li>
        <li ref={saturdayRef} class="day-input hidden">
          Saturday{" "}
          <input
            class="input-time"
            type="text"
            name="saturday-field-one"
            placeholder="hh:mm"
          />{" "}
          to{" "}
          <input
            class="input-time"
            type="text"
            name="saturday-field-two"
            placeholder="hh:mm"
          />
        </li>
      </ul>
    </div>
  );
}
