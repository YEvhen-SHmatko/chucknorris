import React, { useContext } from "react";
import Context from "../../hooks/context";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import * as API from "../../services/API";
import Styles from "./index.module.css";
import FromCategories from "../FromCategories";
import FromSearch from "../FormSearch";
import styled from "styled-components";
const MyRadio = styled(Radio)`
  & {
    &.MuiIconButton-colorSecondary * {
      color: #ababab !important;
    }
    &.MuiIconButton-colorSecondary:hover {
      background-color: #ababab22 !important;
    }
    &.Mui-checked * {
      color: #333333 !important;
    }
  }
`;
// MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-18 MuiRadio-root MuiRadio-colorSecondary sc-AxirZ kvoAsr PrivateSwitchBase-checked-19 Mui-checked MuiIconButton-colorSecondary
const MyFormControl = styled(FormControl)`
  & {
    width: 100%;
  }
`;
const MyFormControlLabel = styled(FormControlLabel)`
  & {
    margin: -4px 0 -4px -11px;
  }
`;
const SearchSection = () => {
  const { set, get } = useContext(Context);
  const handleChange = (e) => {
    set().TypeSearch(e.target.value);
    if (e.target.value === "categories") {
      API.getCategoryList().then((data) => set().Categories(data));
    }
  };
  return (
    <div className={Styles.section}>
      <MyFormControl component="fieldset">
        <RadioGroup
          aria-label="formSearch"
          name="formSearch1"
          value={get().typeSearch}
          onChange={handleChange}
        >
          <MyFormControlLabel
            value="random"
            control={<MyRadio />}
            label="Random"
          />
          <MyFormControlLabel
            value="categories"
            control={<MyRadio />}
            label="From categories"
          />
          {get().typeSearch === "categories" && <FromCategories />}
          <MyFormControlLabel
            value="search"
            control={<MyRadio />}
            label="Search"
          />
          {get().typeSearch === "search" && <FromSearch />}
        </RadioGroup>
      </MyFormControl>
    </div>
  );
};
export default SearchSection;
