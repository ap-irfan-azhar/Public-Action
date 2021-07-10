import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/NavBar'
import Footer from './Components/Footer'
import ScrollToTop from "./Components/ScrollToTop"
import About from "./Pages/About"
import Competition from "./Pages/Competition"
import Conference from "./Pages/Conference"
import SideEvents from "./Pages/SideEvents"
import Homepage from "./Pages/Homepage"
import HowToRegister from "./Pages/HowToRegister"
import RegistCompetition from "./Pages/RegistCompetition"
import RegistConference from "./Pages/RegistConference"
import AbstractSubmission from "./Pages/AbstractSubmission"

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/events/competition" exact>
              <Competition />
            </Route>

            <Route path="/events/conference" exact>
              <Conference />
            </Route>
   
            <Route path="/events/side-events" exact>
              <SideEvents />
            </Route>

            <Route path="/how-to-register" exact>
              <HowToRegister />
            </Route>
          
            <Route path="/abstract-submission" exact>
              <AbstractSubmission />
            </Route>

            <Route path="/competition-booklet" exact>
              <div className="block h-screen w-screen bg-putih text-5xl text-center font-serif">
                <p className="my-40">
                  Nanti Booklet lomba di-<i>embed</i> di laman ini
                </p>
              </div>
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
