import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AñadirCarro from "./pages/AñadirCarro";
import PagoFinal from "./pages/PagoFinal";
import CategoryPage from "./pages/CategoryPage";
import SpecificPage from "./pages/SpecificPage";
import Data from "./context/data";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Inicio />
            </Route>
            <Route exact path="/mispedidos">
              <AñadirCarro />
            </Route>
            <Route exact path="/carro">
              <PagoFinal />
            </Route>
            <Route exact path="/categoria/:id">
              <CategoryPage />
            </Route>
            <Route exact path="/categoria/:id/:id">
              <SpecificPage />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
