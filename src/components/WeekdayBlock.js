import React, { useState } from "react";

export default function WeekdayBlock(props) {
  return (
    <li
      onClick={(e) => props.handleToggle(e, props.weekday)}
      className="date-item pointer"
    >
      {props.text}
    </li>
  );
}
