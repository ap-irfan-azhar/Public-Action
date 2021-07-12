import { Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/NavBar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import About from './Pages/About'
import Competition from './Pages/Competition'
import Conference from './Pages/Conference'
import SideEvents from './Pages/SideEvents'
import Homepage from './Pages/Homepage'
import RegistCompetition from './Pages/RegistCompetition'
import RegistConference from './Pages/RegistConference'
import AbstractSubmission from './Pages/AbstractSubmission'
import Guidebook from './Pages/Guidebook'
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100vw",
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="App">
      <main className="App-header flex flex-col bg-putih overflow-hidden">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/events/competition" exact>
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Competition />
              </motion.div>
            </Route>

            <Route path="/events/conferences" exact>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
              <Conference />
            </motion.div>
            </Route>
  
            <Route path="/events/side-events" exact>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
              <SideEvents />
            </motion.div>
            </Route>
          
            <Route path="/abstract-submission" exact>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
              <AbstractSubmission />                  
            </motion.div>
            </Route>

            <Route path="/guidebook" exact>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
              <Guidebook />                  
            </motion.div>
            </Route>
                                    
            <Route path="/registration/conference" exact>
              <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                <RegistConference />                  
              </motion.div>
            </Route>
            
            <Route path="/registration/competition" exact>
              <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                <RegistCompetition />                  
              </motion.div>
            </Route>            

            <Route path="/about" exact>
              <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                <About />                  
              </motion.div>
            </Route>

            <Route path="/" exact>
              <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                <Homepage />                  
              </motion.div>
            </Route>

          </Switch>
        </AnimatePresence>
        <Footer /> 
      </main>
    </div>
  );
}

export default App;
