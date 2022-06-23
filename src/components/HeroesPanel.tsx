import { useContext } from 'react';
import { Link } from 'react-router-dom';
import HeroCard from './HeroCard';
import HeroesContext from '../HeroesContext';
import { Container } from './ui/Container.styled';
import { CircularUnderLoad } from './ui/Loader';
import { HeroProps } from '../types';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

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
      <Grid container spacing={8} direction="row" justifyContent="center">
        {isLoading ? (
          <CircularUnderLoad />
        ) : filter ? (
          heroes
            .filter((hero: HeroProps) => hero.name.toLowerCase().includes(filter.toLowerCase()))
            .slice(0, 3)
            .map((hero: HeroProps) => (
              <Grid
                key={hero.id}
                container
                item
                xs={12}
                lg={4}
                md={4}
                justifyContent="space-around"
              >
                <StyledLink to={`/${hero.id}`}>
                  <HeroCard hero={hero} />
                </StyledLink>
              </Grid>
            ))
        ) : (
          randomHeroes.map((hero: HeroProps) => (
            <Grid key={hero.id} container item xs={12} lg={4} md={4} justifyContent="space-around">
              <StyledLink to={`/${hero.id}`}>
                <HeroCard hero={hero} />
              </StyledLink>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default HeroesPanel;
