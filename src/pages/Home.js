import React from "react";
import TopBar from "../components/TopBar.js";
import Schedule from "../components/Schedule.js";

export default function Home(props) {
  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data.goal);
  console.log(data);
  return (
    <div className="home">
      <TopBar />
      <div className="home--body body">
        <p className="bold">🔥{props.streak} day streak</p>
        <div className="background-div">
          <p className="small-light">My goal</p>
          {/* <p className="small-bold">{localStorage.getItem('data')}</p> */}
          <p className="small-bold">
            {data.courseGoal ? data.courseGoal : "Placeholder goal"}
          </p>
        </div>
        <p className="bold">Daily Schedule</p>
        <Schedule />
      </div>
    </div>
  );
}
