import "./index.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import MeetOriion from "./pages/MeetOriion.js";
import CoursePicker from "./pages/CoursePicker";
import CourseGoal from "./pages/CourseGoal";
import ScheduleSelection from "./pages/ScheduleSelection";

function App() {
  const [data, setData] = useState({
    courseName: null,
    courseURL: null,
    courseGoal: null,
    courseSchedule: null,
    streak: 0,
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  });

  //TODO: local storage || set up Firebase
  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  // }, [data]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home data={data} setData={setData} />
          </Route>
          <Route path="/get-started">
            <MeetOriion />
          </Route>
          <Route path="/select-course">
            <CoursePicker data={data} setData={setData} />
          </Route>
          <Route path="/set-goal">
            <CourseGoal data={data} setData={setData} />
          </Route>
          <Route path="/set-schedule">
            <ScheduleSelection data={data} setData={setData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
