import PropTypes from "prop-types";
import styles from "./Footer.module.css";
import Dropdown from "../Dropdown";
import RequestInfo from "../RequestInfo";

export default function Footer({ list }) {
  return (
    <footer className={styles.footer}>
      <Dropdown>
        <RequestInfo list={list} />
      </Dropdown>
    </footer>
  );
}

Footer.propTypes = {
  list: PropTypes.array,
};
