import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About/About";
import AllBlogs from "./components/AllBlogs/AllBlogs";
import AllWorks from "./components/AllWorks/AllWorks";
import ContactForm from "./components/ContactForm/ContactForm";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Share/Footer/Footer";
import HashLoader from "react-spinners/HashLoader";
import './app.css'

function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#78C800");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return (
    <>
      {
        loading ?
          <div className="preLoader">
            <HashLoader color={color} loading={loading} size={150} />
          </div>
          :

          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/allWorks">
                <AllWorks></AllWorks>
              </Route>
              <Route path="/allBlogs">
                <AllBlogs></AllBlogs>
              </Route>
              <Route path="/contactForm">
                <ContactForm></ContactForm>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      }
    </>

  );
}

export default App;
