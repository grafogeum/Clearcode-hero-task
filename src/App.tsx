import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import { Paths } from './utils/routing';
import HeroesContext from './HeroesContext';
import { Typography } from '@material-ui/core';
import { SingleHero } from './screens/SingleHero';
import { HeroReducer } from './reducers/HeroReducer';

const App = () => {
  const [state, dispatch] = React.useReducer(HeroReducer, {
    heroes: [],
    filter: '',
    isLoading: true,
  });

  React.useEffect(() => {
    fetch('http://localhost:8000/heroes')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'SET_HEROES',
          payload: data!,
        });
        setInterval(() => {
          dispatch({
            type: 'SET_HEROES',
            payload: data!,
          });
        }, 15000);
      });
  }, []);

  return (
    <div className="App-container">
      <Typography>Heroes</Typography>
      <HeroesContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path={Paths.HOME} element={<Home />} />
            <Route path={`${Paths.HOME}:heroIdParam`} element={<SingleHero />} />
          </Routes>
        </BrowserRouter>
      </HeroesContext.Provider>
    </div>
  );
};
export default App;
