import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Login from './authentication/Login';
import Register from './authentication/Register';
import CourseDetails from './components/CourseDetails';
import LoginAdministrator from './authentication/LoginAdministrator';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';
import TeacherDashboard from './teacheraction/TeacherDashboard';
import Logout from './authentication/Logout';
import AddCourses from './teacheraction/AddCourses';
import Admindashboard from './adminaction/AdminDashboard';
import Footer from  './components/Footer';
import ModifyCourses from './teacheraction/ModifyCourses';
import DeleteCourses from './teacheraction/DeleteCourses';
import UserProfile from './teacheraction/UserProfile';
import AdminUserProfile from './adminaction/AdminUserProfile';
import TeacherActivity from './adminaction/TeacherActivity';
import TeacherLoginDetails from './adminaction/TeacherLoginDetails';
import AddTeacher from './adminaction/AddTeacher';
import RequestPage from './adminaction/RequestsPage';
import CoursesAssigned from './teacheraction/CoursesAssigned';
import QueryWithAdmin from './teacheraction/QueryWithAdmin';

export const UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Router>
      <UserContext.Provider value={{state, dispatch}}>
      <Navbar></Navbar>
        <Switch>
          <Route exact path = '/home/:search?'> <Homepage /> </Route>
          <Route path = '/login'> <Login /> <Logout /> </Route>
          <Route path = '/logout'> <Logout /> </Route>
          <Route path = '/register'> <Register /> </Route>
          <Route path="/coursedetails"> <CourseDetails /> </Route>
          <Route path = '/loginadministrator'> <LoginAdministrator /> </Route>
          <Route path = '/teacherdashboard'> <TeacherDashboard /> </Route>
          <Route path = '/admindashboard'> <Admindashboard /> </Route>
          <Route path = '/addcourses'> <AddCourses /> </Route>
          <Route path = '/modifycourses'> <ModifyCourses /> </Route>
          <Route path = '/deletecourses'> <DeleteCourses /> </Route>
          <Route path = '/userprofile'> <UserProfile /> </Route>
          <Route path = '/adminuserprofile'> <AdminUserProfile /> </Route>
          <Route path = '/teacheractivity'> <TeacherActivity /> </Route>
          <Route path = '/teacherlogindetails'> <TeacherLoginDetails /> </Route>
          <Route path = '/addteacher'> <AddTeacher /> </Route>
          <Route path = '/requestpage'> <RequestPage /> </Route>
          <Route path = '/coursesassigned'> <CoursesAssigned /> </Route>
          <Route path = '/querywithadmin'> <QueryWithAdmin /> </Route>
        </Switch>
        </UserContext.Provider>
        <Footer></Footer>
    </Router>
  );
} 

export default App;