import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/NavBar'
import Footer from './Components/Footer'
import ScrollToTop from "./Components/ScrollToTop"
import About from "./Pages/About"
import Competition from "./Pages/Competition"
import Conference from "./Pages/Conference"
import Festival from "./Pages/Festival"
import Homepage from "./Pages/Homepage"
import HowToRegister from "./Pages/HowToRegister"
import RegistCompetition from "./Pages/RegistCompetition"
import RegistConference from "./Pages/RegistConference"

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/competition" exact>
              <Competition />
            </Route>

            <Route path="/conference" exact>
              <Conference />
            </Route>
   
            <Route path="/festival" exact>
              <Festival />
            </Route>

            <Route path="/how-to-register" exact>
              <HowToRegister />
            </Route>
            
            
            <Route path="/registration/conference" exact>
              <RegistConference />
            </Route>
            
            <Route path="/registration/competition" exact>
              <RegistCompetition />
            </Route>            

            <Route path="/about" exact>
              <About />
            </Route>

            <Route path="/" exact>
              <Homepage />
            </Route>
          </Switch>
            <Footer /> 
        </Router>
      </header>
    </div>
  );
}

export default App;
