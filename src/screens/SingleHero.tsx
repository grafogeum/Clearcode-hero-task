import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroCard from '../components/HeroCard';
import { useContext } from 'react';
import HeroesContext from '../HeroesContext';
import { HeroProps } from '../types';
import { heroRowHeader, language, heroPowerStats } from '../enums/enums';
import styled from '@emotion/styled';

const Table = styled.table`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font: 20px/20px arial, sans-serif;

  @media (max-width: 768px) {
  }
`;
const TableHead = styled.thead`
  width: 100%;
`;

const TableContainer = styled.div`
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /*
	Label the data
	*/
    td:nth-of-type(1):before {
      content: 'Name';
    }
    td:nth-of-type(2):before {
      content: 'Appearance';
    }
    td:nth-of-type(3):before {
      content: 'Weight';
    }
    td:nth-of-type(4):before {
      content: 'Eye Color';
    }
    td:nth-of-type(5):before {
      content: 'Hair Color';
    }
    td:nth-of-type(6):before {
      content: 'Biography';
    }
    td:nth-of-type(7):before {
      content: 'Work';
    }
    td:nth-of-type(8):before {
      content: 'Connections';
    }
    td:nth-of-type(9):before {
      content: 'Power';
    }
  }
`;

const TableCell = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #030303;
  background-color: #c4c4c4;
`;

const TableRow = styled.tr`
  width: 100%;
  & > td,
  th {
    height: 100%;
    background-color: #c4c4c4;
  }
`;

const PowerStats = styled.div`
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

const HeroDetails = ({
  hero: { name, powerStats, appearance, biography, work, connections },
  language = 'pl',
}: {
  hero: Omit<HeroProps, 'id' | 'slug' | 'images'>;
  language: string;
}) => (
  <tbody>
    <TableRow>
      <td>
        <TableCell>{name!}</TableCell>
      </td>
      <td>
        <TableCell>{language === 'pl' ? appearance?.height[0]! : appearance?.height[1]!}</TableCell>
      </td>
      <td>
        <TableCell>{language === 'pl' ? appearance?.weight[0]! : appearance?.weight[1]!}</TableCell>
      </td>
      <td>
        <TableCell>{appearance?.eyeColor!}</TableCell>
      </td>
      <td>
        <TableCell>{appearance?.hairColor!}</TableCell>
      </td>
      <td>
        <TableCell>Full Name: {biography?.fullName!}</TableCell>
        <TableCell>Alter Egos: {biography?.alterEgos!}</TableCell>
        <TableCell>Aliases: {biography?.aliases.join(', ')!}</TableCell>
      </td>
      <td>
        <TableCell>Occupation: {work?.occupation!}</TableCell>
        <TableCell>Base: {work?.base!}</TableCell>
      </td>
      <td>
        <TableCell>Group Affiliation: {connections?.groupAffiliation!}</TableCell>
        <TableCell>Relatives: {connections?.relatives!}</TableCell>
      </td>
      <td>
        <PowerStats>
          {powerStats &&
            Object.values(powerStats).map((value, index) => {
              return (
                <TableCell key={index}>
                  <h4>
                    {heroPowerStats[index]}: {value}
                  </h4>
                  <hr />
                </TableCell>
              );
            })}
        </PowerStats>
      </td>
    </TableRow>
  </tbody>
);

const TableHeroDetails = ({ heroRowHeader }: { heroRowHeader: Array<string> }) => {
  return (
    <TableHead>
      <TableRow>
        {heroRowHeader.map((header: string, i: number) => (
          <th key={`${header} - ${i}`}>{header}</th>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const SingleHero = () => {
  const {
    state: { heroes },
  } = useContext(HeroesContext);
  const { heroIdParam } = useParams<{ heroIdParam: string }>();
  const heroId = parseInt(heroIdParam!);
  const hero = heroes?.find((el: HeroProps) => el && el?.id === heroId);

  const memoedHero = useMemo(
    () => ({
      name: hero?.name,
      powerStats: hero?.powerstats,
      appearance: hero?.appearance,
      biography: hero?.biography,
      work: hero?.work,
      connections: hero?.connections,
    }),
    [hero],
  );

  return (
    <>
      <HeroCard hero={hero} />
      <TableContainer>
        <Table>
          <TableHeroDetails heroRowHeader={heroRowHeader} />
          <HeroDetails hero={memoedHero} language={language} />
        </Table>
      </TableContainer>
    </>
  );
};
