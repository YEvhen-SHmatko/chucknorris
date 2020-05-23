import React, { useContext } from "react";
import Context from "../../hooks/context";
import Item from "../Item";
import Styles from "./index.module.css";
export default function AlignItemsList() {
  const { get } = useContext(Context);
  return (
    <ul className={Styles.list}>
      {!!get().findFact.length &&
        get().findFact.map((item) => <Item key={item.id} item={item} />)}
    </ul>
  );
}
