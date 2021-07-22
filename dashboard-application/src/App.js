import React, { Fragment } from 'react';
import classes from './App.module.css';
import NavigationBar from './components/DashBoardLayout/HorizontalNavigationBar/NavigationBar.js';
import LeftNavBar from './components/DashBoardLayout/LeftNavBar/NavBar';
import ContentLayout from './components/DashBoardLayout/FileContentLayout/ContentLayout';
import { useSelector } from 'react-redux';
import UserAuth from './components/UserAuthentication/UserAuth';
import { LOGGED_IN ,LOGGED_OUT } from './store/staticVariable';





const App = () => {

  const getLogginStatus = useSelector(state => state.Auth.status);

  if (getLogginStatus === LOGGED_IN) {
    return (
      <Fragment>
        <NavigationBar />
        <div className={classes.containerClass}>
          <div className={classes.box1}>
            <div className={classes.imageBox}></div>
            <LeftNavBar />
          </div>
          <div className={classes.box2}>
            <ContentLayout />
          </div>
        </div>
      </ Fragment>
    );
  }
  else if(getLogginStatus === LOGGED_OUT){
    return (
      <div className={classes.containerClass}>  
        <UserAuth />
      </div>
      
    )
  }
}

export default App;
