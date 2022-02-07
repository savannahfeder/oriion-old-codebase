import './index.css';
import React from "react"
import Home from "./pages/Home.js"
import MeetOriion from "./pages/MeetOriion.js"
import CoursePicker from './pages/CoursePicker';
import CourseGoal from './pages/CourseGoal';


function App() {
  return (
    <div className="App">
      {/* <Home goal="Become a frontend developer by May 2022" streak = {7}/> */}
      {/* <MeetOriion /> */}
      <CourseGoal />
    </div>
  );
}

export default App;
