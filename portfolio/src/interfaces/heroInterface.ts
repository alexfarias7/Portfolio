type hero = {
  greetingHero: string;
  nameHero: string;
  lastName: string;
  occupationHero: string;
  apresetationHero: string;
  image: string;
};

export interface IHero {
  hero: hero;
}

export interface IHeroImg {
  hero: Pick<hero, "image">;
}
export interface IHeroInfo {
  hero: Omit<hero, "image">;
}
