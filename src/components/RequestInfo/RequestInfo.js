import PropTypes from "prop-types";
import styles from "./RequestInfo.module.css";

export default function RequestInfo({ list }) {
  return (
    <>
      {list && list.length > 0 ? (
        <ul className={styles.list}>
          {list.map(({ id, date, url }) => (
            <li key={id}>
              <b>Date: </b>
              {date} <b>Url: </b>
              {url}
            </li>
          ))}
        </ul>
      ) : (
        <h3>No operations yet</h3>
      )}
    </>
  );
}

RequestInfo.propTypes = {
  list: PropTypes.array,
};
