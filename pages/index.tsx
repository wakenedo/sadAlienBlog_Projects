import '../styles/global.css'


import { NextPage } from "next";
import CreatorLogo from 'components/CreatorLogo';
import HeroSectionSeparator from 'components/Separators/HeroSectionSeparator';
import { HeroSectionValues } from 'components/Hero/HeroSectionValues';
import HeroCarousel from 'components/Hero/HeroCarousel';
import { HeroFreeComponents } from 'components/Hero/HeroFreeComponents';
import DefaultSectionTextAndImage from 'components/Default/DefaultSectionTextAndImage';
import DefaultSectionHistory from 'components/Default/DefaultSectionHistory';









const Home: NextPage = () => {
  return (
    <>
      <title>{` Sad Alien | Home  `}</title>
      <HeroCarousel />
      <HeroSectionValues />

      <HeroFreeComponents />
      <DefaultSectionTextAndImage />
      <DefaultSectionHistory />
      <HeroSectionSeparator />
      <CreatorLogo />
    </>
  )
}


export default Home