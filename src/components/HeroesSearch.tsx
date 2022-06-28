import { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import HeroesContext from '../HeroesContext';
import { Container } from './ui/Container.styled';
import { useDebouncedCallback } from 'use-debounce';

const Input = styled.input`
  width: 80%;
  border-radius: 5px;
  border: 1px solid #9edec6;
  fontsize: x-large;
  padding: 0.6rem;
  margin: auto;
`;

const HeroesSearch = () => {
  const { dispatch } = useContext(HeroesContext);

  const [searchValue, setSearchValue] = useState('');

  const debouncedOnChange = useDebouncedCallback((value) => {
    dispatch({
      type: 'SET_FILTER',
      payload: value,
    });
  }, 500);

  useEffect(() => {
    debouncedOnChange(searchValue);
  }, [debouncedOnChange, searchValue]);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Filter"
        value={searchValue}
        onChange={(e) => {
          e.preventDefault();
          setSearchValue(e.target.value);
        }}
      />
    </Container>
  );
};

export default HeroesSearch;
