import Hero from "components/Hero";
import Solutions from "components/Solutions";
import { Container } from "./styles";

const HomePage = () => {
  return (
    <>
      <Container name="container">
        <Hero name="hero" />
        <Solutions name="solutions" />
      </Container>
    </>
  );
};

export default HomePage;
