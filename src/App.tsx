import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import { Paths } from './utils/routing';
import HeroesContext from './HeroesContext';
import { Typography } from '@material-ui/core';
import { SingleHero } from './screens/SingleHero';
import { HeroReducer } from './reducers/HeroReducer';
import { HeroProps } from './types';
import { getHeroes } from './utils/requests';

const App = () => {
  const [state, dispatch] = React.useReducer(HeroReducer, {
    heroes: [],
    filter: '',
    isLoading: true,
  });

  React.useEffect(() => {
    const setHeroesAction = (heroes: HeroProps[]) =>
      dispatch({ type: 'SET_HEROES', payload: heroes });
    getHeroes(setHeroesAction);
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
            <Route path={`${Paths.HOME}${Paths.HERODETAILS}`} element={<SingleHero />} />
          </Routes>
        </BrowserRouter>
      </HeroesContext.Provider>
    </div>
  );
};
export default App;
