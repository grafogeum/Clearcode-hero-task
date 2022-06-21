import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Home from './screens/Home';
import { Paths } from './utils/routing';
import HeroesContext from './HeroesContext';
import { Grid } from '@material-ui/core';
import { SingleHero } from './components/HeroesPanel';

export const ProjectsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_HEROES':
      return {
        ...state,
        heroes: action.payload,
        isLoading: isEmpty(action.payload) ? true : false,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(ProjectsReducer, {
    heroes: [],
    filter: '',
    isLoading: true,
  });

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'SET_HEROES',
          payload: data?.heroes!,
        });
        setInterval(() => {
          dispatch({
            type: 'SET_HEROES',
            payload: data?.heroes!,
          });
        }, 15000);
      });
  }, []);

  return (
    <div className="App-container">
      <h1>Heroes</h1>
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
