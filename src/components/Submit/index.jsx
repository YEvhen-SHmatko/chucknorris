import React, { useContext } from "react";
import Context from "../../hooks/context";
import Button from "@material-ui/core/Button";
import * as API from "../../services/API";
import styled from "styled-components";

const MyButton = styled(Button)`
  & {
    margin-top: 20px !important;
    border: 0px;
    border-radius: 10px !important;
    color: #fff;
    background: linear-gradient(92.01deg, #8ea7ff 0%, #7291ff 100%);
    width: 152px;
    height: 42px;
    padding: 0 30px;
  }
  & * {
    color: #fff;
  }
  &:hover {
    opacity: 0.9;
    background: linear-gradient(92.01deg, #8ea7ff 0%, #7291ff 100%);
  }
`;

const Submit = () => {
  const { set, get } = useContext(Context);
  const handleSubmit = () => {
    if (get().typeSearch === "random") {
      API.getRandom().then((data) => set().FindFact(data));
    }
    if (get().typeSearch === "categories") {
      if (!!get().checkCategories.length) {
        API.getCategories(get().checkCategories).then((data) =>
          set().FindFact(data)
        );
      }
    }
    if (get().typeSearch === "search") {
      if (!!get().searchValue.length) {
        API.getSearch(get().searchValue).then((data) => set().FindFact(data));
      }
    }
  };
  return <MyButton onClick={handleSubmit}>Get a joke</MyButton>;
};
export default Submit;
