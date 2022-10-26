import Greeting2 from "./Greeting2";
import PropTypes from "prop-types";

function Greeting(props) {
  return (
    <h1>Hi {props.name}</h1>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greeting;
