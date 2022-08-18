import Doctors from "components/Doctors";
import Hero from "components/Hero";
import Schedule from "components/Schedule";
import Solutions from "components/Solutions";
import { Container } from "./styles";

const HomePage = () => {
  return (
    <>
      <Container name="container">
        <Hero name="hero" />
        <Solutions name="solutions" />
        <Doctors name="doctors" />
        <Schedule name="schedule" />
      </Container>
    </>
  );
};

export default HomePage;
