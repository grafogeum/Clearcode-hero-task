import { isEmpty } from 'lodash';
import { HeroProps } from '../types';
type HeroState = {
  heroes: HeroProps[];
  filter: string;
  isLoading: boolean;
};

type SetHeroesAction = {
  type: 'SET_HEROES';
  payload: HeroProps[];
};
type SetFilterAction = {
  type: 'SET_FILTER';
  payload: string;
};
type SetIsLoadingAction = {
  type: 'SET_IS_LOADING';
  payload: boolean;
};
type Action = SetHeroesAction | SetFilterAction | SetIsLoadingAction;

export const HeroReducer = (state: HeroState, action: Action) => {
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
