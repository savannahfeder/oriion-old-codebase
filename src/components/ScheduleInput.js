import React, { useState } from "react";

export default function ScheduleInput(props) {
  return (
    <li class="day-input hidden">
      {props.weekday}{" "}
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
  );
}
