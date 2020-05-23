import React from "react";
import Styles from "./index.module.css";
import ListFavourite from "../ListFavourite";
import FavouriteButton from "../FavouriteButton";
import { useMediaQuery } from "react-responsive";
import { isMobile, isTablet } from "../../services/mediaQuery";
const Favourite = () => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <div
      className={
        Mobile
          ? Styles.Mobile_container
          : Tablet
          ? Styles.Tablet_container
          : Styles.Desktop_container
      }
    >
      <FavouriteButton />
      <main>
        <ListFavourite />
      </main>
    </div>
  );
};
export default Favourite;
