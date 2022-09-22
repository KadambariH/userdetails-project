import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import NoMatch from '../components/NoMatch/NoMatch';
import UserDetails from '../components/UserDetails/UserDetails';
import UserDetailsClass from '../components/UserDetailsClassBasedComponent/UserDetailsClass'

export const AppRouter = () => {

  return (
      <BrowserRouter>
      <NavBar />
          <Switch>
              <Route exact path='/' component={UserDetails} />
              <Route exact path='/user' component={UserDetailsClass} />
              <Route path="*" component={NoMatch} />
          </Switch>
      </BrowserRouter>
  )
}



export default AppRouter;
