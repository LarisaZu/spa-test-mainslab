import PropTypes from "prop-types";
import styles from "./Gallery.module.css";

export default function Gallery({ list }) {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item}>
          <img src={item} />
        </li>
      ))}
    </ul>
  );
}

Gallery.propTypes = {
  list: PropTypes.array,
};
