import { User } from "../components/User";
import UserClass from "../components/UserClass";

const About = () => {
  return (
    <div>
      <h1>ABOUT</h1>
      <h2>This is an about page</h2>
      <User
        name={"Jayasimman (function)"}
        location={"Bengaluru"}
        contact={"jayasi@gmail.com"}
      />
      <UserClass
        name={"Jayasimman (Class)"}
        location={"Madurai"}
        contact={"1234567890"}
      />
    </div>
  );
};

export default About;
