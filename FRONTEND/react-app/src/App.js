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
import TeacherDashboard from './components/TeacherDashboard';
import Logout from './authentication/Logout';
import AddCourses from './components/AddCourses';
import Admindashboard from './components/AdminDashboard';

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
        </Switch>
        </UserContext.Provider>
    </Router>
  );
} 

export default App;