import React, { useContext } from "react";
import Context from "../../hooks/context";
import SvgIcon from "@material-ui/core/SvgIcon";
import Cancel from "@material-ui/icons/Cancel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useMediaQuery } from "react-responsive";
import { isDesktop } from "../../services/mediaQuery";

import styled from "styled-components";
import Styles from "./index.module.css";

const MyIcon = (props) => (
  <SvgIcon
    viewBox="0 0 28 28"
    style={{
      width: "24px",
      height: "24px",
      padding: "2px",
    }}
  >
    <path d="M 12.734861,27.96458 C 7.9532736,27.472064 3.7960356,24.641675 1.6333986,20.406327 0.58747854,18.357979 0.10649154,16.351114 0.10825454,14.042835 c 9.99e-4,-1.309459 0.117576,-2.275066 0.414978,-3.437276 C 1.7847336,5.6757723 5.6539426,1.797091 10.58609,0.51806693 c 2.636664,-0.68375 5.427817,-0.56811 8.062965,0.334056 0.877489,0.30041597 2.323145,1.01730877 3.106826,1.54065737 3.475704,2.3211049 5.681149,5.9101971 6.187506,10.0694097 0.125671,1.032265 0.07896,2.875043 -0.09857,3.888889 -0.630842,3.602567 -2.525583,6.70477 -5.425372,8.882795 -1.884823,1.415687 -4.032333,2.300138 -6.466039,2.663034 -0.614164,0.09158 -2.584282,0.133003 -3.218544,0.06767 z m 7.618247,-9.936117 c 0.259939,-0.07218 0.562043,-0.356675 0.664984,-0.626222 0.16342,-0.42791 0.0056,-0.931974 -0.376251,-1.2017 L 20.428725,16.050003 H 14.072833 7.7169406 l -0.19155,0.119084 c -0.270862,0.168391 -0.436004,0.440939 -0.470666,0.776785 -0.05091,0.493289 0.249495,0.943054 0.725644,1.086426 0.21297,0.06412 12.3413204,0.06043 12.5727394,-0.0038 z m 0.185862,-6.08061 c 0.424442,-0.214677 0.650235,-0.763299 0.500666,-1.216497 -0.09783,-0.296435 -0.372297,-0.564835 -0.667132,-0.652392 -0.378841,-0.1125026 -12.2316854,-0.1140646 -12.6101904,-0.0017 -0.880966,0.261619 -0.976909,1.505 -0.145732,1.888613 0.191696,0.08847 0.481585,0.09269 6.4499414,0.09374 l 6.249224,0.0011 0.223223,-0.112903 z" />
  </SvgIcon>
);

const MyCheckbox = styled(Checkbox)`
  & * {
    color: #333333;
  }
`;
const MyCancel = styled(Cancel)`
  & * {
    & path {
      width: 28px;
      height: 28px;
    }
  }
`;
const FavoriteButton = () => {
  const Desktop = isDesktop(useMediaQuery);
  const { set, get } = useContext(Context);
  const handleClick = (e) => {
    set().IsModal(e.target.checked);
  };
  return (
    <div
      className={
        Desktop ? Styles.Desktop_container : Styles.NotDesktop_container
      }
    >
      {Desktop ? (
        "Favourite"
      ) : (
        <FormControlLabel
          value="random"
          control={
            <MyCheckbox
              onClick={handleClick}
              icon={<MyIcon />}
              checkedIcon={<MyCancel />}
              checked={get().isModal}
            />
          }
          label="Favourite"
        />
      )}
    </div>
  );
};
export default FavoriteButton;
