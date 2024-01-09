import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Login from './authentication/Login';
import Register from './authentication/Register';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path = '/home/:search?'> <Homepage /> </Route>
          <Route path = '/login'> <Login /> </Route>
          <Route path = '/register'> <Register /> </Route>
          <Route path="/coursedetails"> <CourseDetails /> </Route>
        </Switch>
    </Router>
  );
} 

export default App;
