import React from "react";

export default function WeekdayInput(props) {
  const handleInput = (e) => {
    const { name, value } = e.target;
    const weekday = props.weekday.toLowerCase();
    props.setData((prevData) => {
      let timeSlotsArray = [...prevData[weekday]];
      if (name === "field-one") {
        timeSlotsArray[0] = value;
      } else {
        timeSlotsArray[1] = value;
      }
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
        //value={props.data.[weekday][0]} -> to make this a controlled component, the value needs to equal the specific state you're changing; not sure how to do this
        onChange={handleInput}
      />{" "}
      to{" "}
      <input
        class="input-time"
        type="text"
        name="field-two"
        placeholder="hh:mm"
        //value={props.data.[weekday][1]}
        onChange={handleInput}
      />
    </li>
  );
}
