import { StyledFooter } from "./footer.styled";
import { FlexHeader } from "../Header/header.styled";

const index = () => {
  return (
    <StyledFooter>
      <div>
        <hr />
      </div>
      <FlexHeader>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">about me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </FlexHeader>
      <ul>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">about me</a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default index;
