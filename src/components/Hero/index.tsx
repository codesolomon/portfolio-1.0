import { ExploreButton, StyledContent } from "./hero.styled";

const Hero = () => {
  return (
    <StyledContent>
      <h1>
        Hi, I'm Solomon.
        <br />
        I'm a <span>Medical Radiographer</span> and passionate about digital
        solutions.
      </h1>
      <ExploreButton>
        <a href="#">view my work</a>
      </ExploreButton>
    </StyledContent>
  );
};

export default Hero;
