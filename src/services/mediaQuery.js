import { useMediaQuery } from "react-responsive";

const logic = (children, device) => {
  return device ? children : null;
};

export const isDesktop = (cb) => cb({ minWidth: 1439 });
export const isTablet = (cb) => cb({ minWidth: 834, maxWidth: 1439 });
export const isMobile = (cb) => cb({ maxWidth: 833 });
export const isNotMobile = (cb) => cb({ minWidth: 834 });

export const Desktop = ({ children }) => {
  return logic(children, isDesktop(useMediaQuery));
};
export const Tablet = ({ children }) => {
  return logic(children, isTablet(useMediaQuery));
};
export const Mobile = ({ children }) => {
  return logic(children, isMobile(useMediaQuery));
};
export const Default = ({ children }) => {
  return logic(children, isNotMobile(useMediaQuery));
};
