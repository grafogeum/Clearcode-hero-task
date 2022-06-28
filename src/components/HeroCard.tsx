import { CardImage } from './ui/Card';
import { HeroProps } from '../types';
import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const CardTypography = styled.p`
  width: 100%;
  text-align: center;
  font: 20px/20px arial, sans-serif;
  color: #ff7f50;
`;

const HeroCard = ({ hero }: { hero: HeroProps }) => (
  <CardContainer>
    <CardImage src={hero?.images?.md!} alt={hero?.slug} />
    <CardTypography>{hero?.name!}</CardTypography>
  </CardContainer>
);

export default HeroCard;
