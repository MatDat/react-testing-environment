import Greeting from "./Greeting";
import GreetingComments from "./GreetingComments";

function CompleteGreeting() {
  return (
    <div className="mainContainer">
      <Greeting name="Mathias" />
      <GreetingComments numeration="first" />
      <Greeting name="React Learner" />
      <GreetingComments numeration="second" />
      <Greeting name="Wannabe" />
      <GreetingComments numeration="third" />
    </div>
  );
}

export default CompleteGreeting;
