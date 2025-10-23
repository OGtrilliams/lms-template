import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home.jsx";
import CourseList from "./pages/student/CourseList.jsx";
import CourseDetails from "./pages/student/CourseDetails.jsx";
import MyEnrollments from "./pages/student/MyEnrollments.jsx";
import Player from "./pages/student/Player.jsx";
import Loading from "./components/student/Loading.jsx";
import Instructor from "./pages/instructor/Instructor";
import AddCourse from "./pages/instructor/AddCourse.jsx";
import MyCourses from "./pages/instructor/MyCourses.jsx";
import StudentsEnrolled from "./pages/instructor/StudentsEnrolled.jsx";
import Navbar from "./components/student/Navbar.jsx";
import Dashboard from "./pages/instructor/Dashboard.jsx";
import "quill/dist/quill.snow.css";

const App = () => {
  const isEducatorRoute = useMatch("/instructor/*");
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}

      <Routes>
        {/* student routes */}
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Instructor routes */}

        <Route path="/instructor" element={<Instructor />}>
          <Route path="/instructor" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
