import React, { useContext } from "react";
import Context from "../../hooks/context";
import SearchSection from "../SearchSection";
import Styles from "./index.module.css";
import Header from "../Header";
import Submit from "../Submit";
import List from "../List";
import Modal from "../Modal";
import Favourite from "../Favourite";
import { useMediaQuery } from "react-responsive";
import { Desktop, isMobile, isTablet } from "../../services/mediaQuery";
const Home = () => {
  const { get } = useContext(Context);
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <>
      {get().isModal && <Modal />}
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
          <Header />
          <h2 className={Styles.title}>Hey!</h2>
          <p className={Styles.search_type}>
            Let’s try to find a joke for you:
          </p>
          <SearchSection />
          <Submit />
          <List />
        </div>
        <Desktop>
          <Favourite />
        </Desktop>
      </div>
    </>
  );
};
export default Home;
