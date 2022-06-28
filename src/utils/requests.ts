import { Paths } from '../utils/routing';
import { HeroProps } from '../types';

export const getHeroes = async (action: (param: HeroProps[]) => void) => {
  const response = await fetch(`http://localhost:8000${Paths.HEROLIST}`);
  const heroes = await response.json();
  action(heroes);
  setInterval(() => {
    action(heroes);
  }, 15000);
};
