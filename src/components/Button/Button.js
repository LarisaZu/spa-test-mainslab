import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ text, handleClick }) {
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
