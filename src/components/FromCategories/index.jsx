import React, { useContext } from "react";
import Context from "../../hooks/context";
import Styles from "./index.module.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

function FormCategories() {
  const { set, get } = useContext(Context);
  const handleFormat = (event, checkCategories) => {
    set().CheckCategories(checkCategories);
  };
  return (
    <div className={Styles.section}>
      <ToggleButtonGroup
        value={get().checkCategories}
        onChange={handleFormat}
        exclusive
      >
        {get().categories.map((category) => (
          <ToggleButton key={category} value={category}>
            {category}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default FormCategories;
