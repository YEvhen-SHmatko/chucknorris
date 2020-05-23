import React, { useContext } from "react";
import Context from "../../hooks/context";
import Input from "@material-ui/core/Input";
import styled from "styled-components";
const MyInput = styled(Input)`
  & input {
    padding: 0 20px;
    border: 2px solid #333333 !important;
    box-sizing: border-box !important;
    border-radius: 10px !important;
    height: 42px !important;
    font-size: 16px !important;
    color: #ababab !important;
  }
`;
export default function FormSearch() {
  const { set, get } = useContext(Context);
  const handleChange = (event) => {
    set().SearchValue(event.target.value);
  };
  return (
    <MyInput
      autoComplete="off"
      disableUnderline
      variant="outline"
      value={get().searchValue}
      onChange={handleChange}
      placeholder="Free text search..."
    />
  );
}
