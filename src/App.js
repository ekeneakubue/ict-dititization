import './App.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home'
import Ourteam from './pages/our-team/Ourteam'
import Projects from './pages/projects/Projects'
import Bootcamp from './pages/bootcamp/Bootcamp'
import Contacts from './pages/contacts/Contacts'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/ourteam'>
            <Ourteam/>
          </Route>

          <Route path='/projects'>
            <Projects/>
          </Route>

          <Route path='/bootcamp'>
            <Bootcamp/>
          </Route>

          <Route path='/contacts'>
            <Contacts/>
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
