import React from "react";
import { Route, Switch } from "react-router";
import PresentationScreen from "../../presentation/PresentationScreen";
import ProjectsScreen from "../../projects/ProjectsScreen";

const AppNavigator = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PresentationScreen />
      </Route>

      <Route exact path="/contact">
        <div>Contact</div>
      </Route>

      <Route exact path="/projects">
        <ProjectsScreen />
      </Route>

      <Route exact path="/resume">
        <div>Resume</div>
      </Route>
    </Switch>
  );
};

export default AppNavigator;