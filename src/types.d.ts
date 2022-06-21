export type HeroProps = {
  id: number;
  name: string;
  slug: string;
  powerStats: PowerStats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: ImageSize;
};

export const ImageSize: Record<string> = ['xs', 'sm', 'md', 'lg'];

type Images = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

type Connections = {
  groupAffiliation: string;
  relatives: string;
};

type Work = {
  occupation: string;
  base: string;
};

type Biography = {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
};

type Appearance = {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
};

type PowerStats = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};
