import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Users from "./Users";
import About from "./About";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">pwa</Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link> */}
              <Link to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            {/* </Nav.Link> */}
            {/* <Nav.Link> */}
              <Link to="/users" style={{ color: "#fff" }}>
                Users
              </Link>
            {/* </Nav.Link>{" "} */}
            {/* <Nav.Link> */}
              <Link to="/about" style={{ color: "#fff" }}>
                About
              </Link>
            {/* </Nav.Link> */}
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
