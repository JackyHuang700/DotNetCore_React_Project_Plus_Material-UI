import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Header from '../components/Backend/Header';
import Sidebar from '../components/Backend/Sidebar';
import Breadcrumb from '../components/Backend/Breadcrumb';
// import Aside from '../components/Backend/Aside';
import Footer from '../components/Backend/Footer';
import { Auth } from '../helpers/auth'


export function BackendRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => Auth.isAuthenticated !== true
        ? <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        :
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar {...props} isLogin={Auth.isAuthenticated} />
            <main className="main">
              <Breadcrumb />
              <div className="container-fluid">
                <Switch>
                </Switch>
              </div>
              <Component {...props} />
            </main>
            {/* <Aside /> */}
          </div>
          <Footer />
        </div>}
    />

  )
}