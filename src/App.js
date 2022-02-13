import './index.css';
import React from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/Home.js"
import MeetOriion from "./pages/MeetOriion.js"
import CoursePicker from './pages/CoursePicker';
import CourseGoal from './pages/CourseGoal';
import ScheduleSelection from './pages/ScheduleSelection';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home goal="Become a frontend developer by May 2022" streak = {7}/>
          </Route>
          <Route path="/get-started">
            <MeetOriion />
          </Route>
          <Route path="/select-course">
            <CoursePicker />
          </Route>
          <Route path="/set-goal">
            <CourseGoal />
          </Route>
          <Route path="/set-schedule">
            <ScheduleSelection /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
