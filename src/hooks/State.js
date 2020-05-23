import React, { useState, useEffect } from "react";
import Context from "./context";
const INIT_STATE = {
  typeSearch: "random",
  searchValue: "",
  categories: [],
  checkCategories: "",
  findFact: [],
  favouriteFact: [],
  isModal: false,
};
const State = ({ children }) => {
  const [typeSearch, TypeSearch] = useState(INIT_STATE.typeSearch);
  const [isModal, IsModal] = useState(INIT_STATE.isModal);
  const [searchValue, SearchValue] = useState(INIT_STATE.searchValue);
  const [categories, Categories] = useState(INIT_STATE.categories);
  const [checkCategories, CheckCategories] = useState(
    INIT_STATE.checkCategories
  );
  const [findFact, FindFact] = useState(INIT_STATE.findFact);
  const [favouriteFact, FavouriteFact] = useState(INIT_STATE.favouriteFact);
  useEffect(() => {
    FavouriteFact(
      JSON.parse(localStorage.getItem("favouriteFact")) ||
        INIT_STATE.favouriteFact
    );
  }, []);
  useEffect(() => {
    localStorage.setItem("favouriteFact", JSON.stringify(favouriteFact));
  }, [favouriteFact]);
  const set = () => ({
    TypeSearch,
    SearchValue,
    Categories,
    CheckCategories,
    FindFact,
    FavouriteFact,
    IsModal,
  });
  const get = () => ({
    typeSearch,
    searchValue,
    categories,
    checkCategories,
    findFact,
    favouriteFact,
    isModal,
  });

  return <Context.Provider value={{ set, get }}>{children}</Context.Provider>;
};
export default State;
