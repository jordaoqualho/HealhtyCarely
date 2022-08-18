import { Container, Box } from "./styles";

const Menu = () => {
  return (
    <Container name="container" className="flex_cb">
      <Box name="box" className="flex_cs">
        <h1>
          Healhty<span>Carely</span>
        </h1>
        <p>Home</p>
        <p>Doctor</p>
        <p>Services </p>
        <p>Review</p>
      </Box>

      <Box name="box" className="flex_cs">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </Box>
    </Container>
  );
};

export default Menu;
