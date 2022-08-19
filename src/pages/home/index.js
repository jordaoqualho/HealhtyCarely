import Doctors from "components/Doctors";
import Feedback from "components/Feedback";
import Hero from "components/Hero";
import LoadingPage from "components/LoadingPage";
import Rating from "components/Rating";
import Schedule from "components/Schedule";
import Solutions from "components/Solutions";
import { Container } from "./styles";

const HomePage = () => {
  return (
    <>
      <LoadingPage name="loadingPage" />
      <Container name="container">
        <Hero name="hero" />
        <Solutions name="solutions" />
        <Doctors name="doctors" />
        <Schedule name="schedule" />
        <Rating name="rating" />
        <Feedback name="feedback" />
      </Container>
    </>
  );
};

export default HomePage;
