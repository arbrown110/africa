import React from 'react'
//import AdventuresList from './adventuresList'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Links from './Links'
import PageNotFound from './PageNotFound'
import AdventuresForm from './Adventures/AdventuresForm'
import AdventureContainer from '../Containers/adventureContainer'
import EventContainer from '../Containers/eventContainer'

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path='/adventures/new' component={AdventuresForm} />
        <Route exact path='/adventures' component={AdventureContainer} />
        <Route exact path='/adventures/:adventureId/events' component={EventContainer} /> 
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Links" component={Links} />
        <Route component={PageNotFound} />
      </Switch>
  );
}

export default Routes;