import { useContext } from 'react';
import styled from '@emotion/styled';
import HeroesContext from '../HeroesContext';
import { Container } from './ui/Container.styled';

const Input = styled.input`
  width: 80%;
  border-radius: 5px;
  border: 1px solid #9edec6;
  fontsize: x-large;
  padding: 0.6rem;
  margin: auto;
`;

const HeroesSearch = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(HeroesContext);
  return (
    <Container>
      <Input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={(e) => {
          dispatch({
            type: 'SET_FILTER',
            payload: e.target.value,
          });
        }}
      />
    </Container>
  );
};

export default HeroesSearch;
