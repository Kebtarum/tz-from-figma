import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import LeftNavBar from './components/LeftNavBar/LeftNavBar';
import LeftNavBarContainer from './components/LeftNavBar/LeftNavBarContainer';
import TaskDetails from './components/TasksList/Task/TaskDetails/TaskDetails';
import TaskDetailsContainer from './components/TasksList/Task/TaskDetails/TaskDetailsContainer';
import TasksListContainer from './components/TasksList/TasksListContainer';
import store from './redux/redux-store';


function App() {
  
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="app">
          <HeaderContainer />
          <div className="app__body">
            <LeftNavBarContainer />
            <Route exact path="/">
              <TasksListContainer />
            </Route>
            <Route exact path="/task/:taskId?">
              <TaskDetailsContainer />
            </Route>


          </div>

        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
