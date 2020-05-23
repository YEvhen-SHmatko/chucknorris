import React, { useContext } from "react";
import Context from "../../hooks/context";
import Item from "../Item";
import Styles from "./index.module.css";
export default function AlignItemsList() {
  const { get } = useContext(Context);
  console.log(get().favouriteFact);
  return (
    <ul className={Styles.list}>
      {!!get().favouriteFact.length &&
        get().favouriteFact.map((item) => (
          <Item
            key={item.id}
            item={item}
            firstColor="#ffffff"
            secondColor="#f8f8f8"
          />
        ))}
    </ul>
  );
}
