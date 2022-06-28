import { heroPowerStats } from '../enums/enums';
import styled from '@emotion/styled';
import { TableCell } from '../screens/SingleHero';
import { PowerStats } from '../types';

const PowerStatsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #030303;
  background-color: #4c4c4;
  & p {
    margin: 0;
    fontsize: 1rem;
    font-weight: bold;
    color: #ff7f50;
    text-transform: uppercase;
  }
`;

export const HeroPowerStats = ({ powerStats }: { powerStats: PowerStats }) => (
  <PowerStatsStyled>
    {powerStats &&
      Object.values(powerStats).map((value, index) => {
        return (
          <TableCell key={index}>
            <h4>{heroPowerStats[index]}:</h4>
            <p> {value}</p>
          </TableCell>
        );
      })}
  </PowerStatsStyled>
);
