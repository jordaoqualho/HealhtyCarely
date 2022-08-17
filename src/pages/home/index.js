import Hero from "components/Hero";
import { Container } from "./styles";

const HomePage = () => {
  return (
    <>
      <Container name="container">
        <Hero name="hero" />
      </Container>
    </>
  );
};

export default HomePage;
