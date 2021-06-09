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
import Registration from "./Pages/Registration"

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/registration">
              <Registration />
            </Route>

            <Route path="/competition">
              <Competition />
            </Route>

            <Route path="/conference">
              <Conference />
            </Route>
   
            <Route path="/festival">
              <Festival />
            </Route>

            <Route path="/how-to-register">
              <HowToRegister />
            </Route>
            
            
            <Route path="/registration">
              <Registration />
            </Route>
            

            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
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
