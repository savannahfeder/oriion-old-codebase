import React, { useState } from "react";

export default function WeekdayInput(props) {
  return (
    <li class="day-input">
      {props.weekday}{" "}
      <input
        class="input-time"
        type="text"
        name="field-one"
        placeholder="hh:mm" //const fieldOnePlaceholder = props.sunday ? props.sunday.startTime : "hh:mm"
      />{" "}
      to{" "}
      <input
        class="input-time"
        type="text"
        name="field-two"
        placeholder="hh:mm"
      />
    </li>
  );
}
