import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeroCard from './HeroCard';
import HeroesContext from '../HeroesContext';
import { Container } from './ui/Container.styled';
import { CircularUnderLoad } from './ui/Loader';
import { HeroProps } from '../types';

export const SingleHero = () => {
  const {
    state: { heroes },
  } = useContext(HeroesContext);
  const { heroIdParam } = useParams<{ heroIdParam: string }>();
  const heroId = parseInt(heroIdParam!);
  const hero = heroes?.find((el: HeroProps) => el && el?.id === heroId);
  return <HeroCard hero={hero} />;
};

const HeroesPanel = () => {
  const {
    state: { heroes, filter, isLoading },
  } = useContext(HeroesContext);

  const getMultipleRandom = (arr: [], num: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const randomHeroes = getMultipleRandom(heroes, 3);

  return (
    <Container>
      {isLoading ? (
        <CircularUnderLoad />
      ) : filter ? (
        heroes
          .filter((hero: HeroProps) => hero.name.toLowerCase().includes(filter.toLowerCase()))
          .slice(0, 3)
          .map((hero: any) => (
            <Link key={hero.id} to={`/${hero.id}`}>
              <HeroCard hero={hero} />
            </Link>
          ))
      ) : (
        randomHeroes.map((hero: any) => (
          <Link key={hero.id} to={`/${hero.id}`}>
            <HeroCard hero={hero} />
          </Link>
        ))
      )}
    </Container>
  );
};

export default HeroesPanel;
