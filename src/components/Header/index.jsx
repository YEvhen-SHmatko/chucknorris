import React from "react";
import Logo from "../Logo";
import Styles from "./index.module.css";
import { useMediaQuery } from "react-responsive";
import { isDesktop } from "../../services/mediaQuery";
import FavouriteButton from "../FavouriteButton";
const Header = () => {
  const Desktop = isDesktop(useMediaQuery);
  return (
    <div className={Styles.section}>
      <Logo />
      {!Desktop && <FavouriteButton />}
    </div>
  );
};
export default Header;
