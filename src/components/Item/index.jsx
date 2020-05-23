import React, { useContext } from "react";
import Context from "../../hooks/context";
import PropTypes from "prop-types";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ChatOutlined from "@material-ui/icons/ChatOutlined";
import Launch from "@material-ui/icons/Launch";
import Checkbox from "@material-ui/core/Checkbox";
import Styles from "./index.module.css";
import { useMediaQuery } from "react-responsive";
import { isMobile } from "../../services/mediaQuery";
import styled from "styled-components";

const MyCheckbox = styled(Checkbox)`
  & * {
    color: red;
  }
`;
const Item = ({ item, firstColor, secondColor }) => {
  const Mobile = isMobile(useMediaQuery);
  const { set, get } = useContext(Context);
  const handleClick = (e) => {
    if (e.target.checked) {
      const newFact = get().findFact.filter((fact) => fact.id === e.target.id);
      set().FavouriteFact([...get().favouriteFact, ...newFact]);
    } else {
      const delFact = get().favouriteFact.filter(
        (fact) => fact.id !== e.target.id
      );
      set().FavouriteFact(delFact);
    }
  };
  return (
    <li
      className={Mobile ? Styles.Mobile_item : Styles.item}
      style={{
        backgroundColor: firstColor,
      }}
    >
      <div>
        <div className={Styles.head}>
          <FormControlLabel
            control={
              <MyCheckbox
                id={item.id}
                onClick={handleClick}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={
                  !!get().favouriteFact.filter((fact) => fact.id === item.id)
                    .length
                }
              />
            }
          />
        </div>
        <div className={Styles.body}>
          <div
            className={Styles.chat}
            style={{
              backgroundColor: secondColor,
            }}
          >
            <ChatOutlined />
          </div>
          <div className={Styles.wrap}>
            <div className={Styles.link}>
              <span>id:</span>
              <a href={item.url}>
                {` `}
                {item.id}
                {` `}
                <Launch />
              </a>
            </div>
            <div className={Styles.value}>{item.value}</div>
            <div className={Styles.footer}>
              <div>Last update: {item.updated_at}</div>
              <div
                className={
                  Mobile ? Styles.Mobile_categories : Styles.categories
                }
              >
                {item.categories.map(
                  (category) =>
                    category && (
                      <span
                        key={category}
                        className={
                          Mobile ? Styles.Mobile_category : Styles.category
                        }
                        style={{
                          backgroundColor: secondColor,
                        }}
                      >
                        {category}
                      </span>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
Item.defaultProps = {
  firstColor: "#f8f8f8",
  secondColor: "#ffffff",
};
Item.propTypes = {
  firstColor: PropTypes.string,
  secondColor: PropTypes.string,
  item: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default Item;
