import React from "react";
import TopBar from "../components/TopBar.js";
import Schedule from "../components/Schedule.js";

export default function Home(props) {
  return (
    <div className="home">
      <TopBar />
      <div className="home--body body">
        <p className="bold">🔥{props.data.streak} day streak</p>
        <div className="background-div">
          <p className="small-light">My goal</p>
          <p className="small-bold">
            {props.data.courseGoal ? props.data.courseGoal : "Placeholder goal"}
          </p>
        </div>
        <p className="bold">Daily Schedule</p>
        <Schedule
          data={props.data}
          setData={props.setData}
          visibility="hidden"
        />
      </div>
    </div>
  );
}
