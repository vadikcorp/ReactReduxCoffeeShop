import "../../styles/css/App.css";

import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Home from "../../components/home";
import ProductDetails from "../../components/productDetails";

const App = () => (
  <div>
    <Header />
    <Navigation />
    <div className="hero">
      <div className="container">
        <div className="row">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
);

export default App;

const NoMatch = ({ location, match }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
