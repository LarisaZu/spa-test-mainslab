import PropTypes from 'prop-types';
import styles from "./ResponseContent.module.css";

export default function ResponseContent({ text }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.description}>{text}</p>
    </div>
  );
}

ResponseContent.propTypes = {
  text: PropTypes.string,
};