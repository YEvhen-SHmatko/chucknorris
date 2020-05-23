import React from "react";
import Styles from "./index.module.css";
import Favourite from "../Favourite";
import { useMediaQuery } from "react-responsive";
import { isMobile, isTablet } from "../../services/mediaQuery";
export default function index() {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <div className={Styles.section}>
      <div
        className={
          Mobile
            ? Styles.Mobile_container
            : Tablet
            ? Styles.Tablet_container
            : Styles.Desktop_container
        }
      >
        <Favourite />
      </div>
    </div>
  );
}
