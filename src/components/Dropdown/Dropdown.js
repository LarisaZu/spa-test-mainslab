import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Dropdown.module.css";
import { ReactComponent as ArrowDownIcon } from "../../icons/arrow_down.svg";
import { ReactComponent as ArrowUpIcon } from "../../icons/arrow_up.svg";

export default function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        <h3>Information</h3>
      </div>

      {isOpen && children}
    </>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node,
};
