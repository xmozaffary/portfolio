import { HeroSectionLeft } from "../components/HeroSectionLeft";
import { HeroSectionRight } from "../components/HeroSectionRight";
export const Home = () => {
  return (
    <>
      <section className="home">
        <HeroSectionLeft></HeroSectionLeft>
        <HeroSectionRight></HeroSectionRight>
      </section>
    </>
  );
};
