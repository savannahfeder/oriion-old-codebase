import React from "react";

export default function WeekdayInput(props) {
  //change state data structure
  //create two functions: one for each input
  //- the input should use the weekday to determine which data's obj data to change
  const handleStartTimeInput = (e) => {
    const weekday = props.weekday.toLowerCase();
    props.setData((prevData) => {
      let timeSlotsArray = [...prevData[weekday]];
      timeSlotsArray[0] = e.target.value;
      return {
        ...prevData,
        [weekday]: timeSlotsArray,
      };
    });
    console.log(props.data);
  };

  const handleEndTimeInput = (e) => {
    const weekday = props.weekday.toLowerCase();
    props.setData((prevData) => {
      let timeSlotsArray = [...prevData[weekday]];
      timeSlotsArray[1] = e.target.value;
      return {
        ...prevData,
        [weekday]: timeSlotsArray,
      };
    });
    console.log(props.data);
  };

  return (
    <li class="day-input">
      {props.weekday}{" "}
      <input
        class="input-time"
        type="text"
        name="field-one"
        placeholder="hh:mm" //const fieldOnePlaceholder = props.sunday ? props.sunday.startTime : "hh:mm"
        onChange={handleStartTimeInput}
      />{" "}
      to{" "}
      <input
        class="input-time"
        type="text"
        name="field-two"
        placeholder="hh:mm"
        onChange={handleEndTimeInput}
      />
    </li>
  );
}
