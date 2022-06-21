import { CardImage } from './ui/Card';
import { HeroProps } from '../types';

const HeroCard = ({ hero }: { hero: HeroProps }) => (
  <div>
    <h2>{hero.name}</h2>
    <CardImage src={hero?.images?.md!} alt={hero?.slug} />
  </div>
);

export default HeroCard;
