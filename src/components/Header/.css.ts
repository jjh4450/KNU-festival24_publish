import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css";

const mobileBreakpoint = "1000px";

export const headerStyles = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.75rem 1.5rem",
  height: "2.25rem",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(79,205,197,0.5)",
  zIndex: 1000,
  boxShadow: "0 4px 6px rgba(79,205,197, 0.4)",
});

export const logoStyles = style({
  width: "4em",
  height: "auto",
  fill: vars.color.green2,
  ":hover": {
    fill: vars.color.green1,
  },
});

export const currentPageStyles = style({
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  "@media": {
    [`(max-width: ${mobileBreakpoint})`]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
});

export const toggleBtnStyles = style({
  background: "none",
  border: "none",
  color: "white",
  fontSize: "24px",
  cursor: "pointer",
  display: "block",
  height: "1.5em",
  width: "1.5em",
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      display: "none",
    },
  },
});

const menuTransition = "transform 0.3s ease-out, opacity 0.3s ease-out";

export const menuStyles = style({
  position: "absolute",
  display: "inline-block",
  top: "100%",
  right: 0,
  padding: "20px",
  boxShadow: "none",
  transform: "translateX(100%)",
  opacity: 0,
  pointerEvents: "none",
  transition: `${menuTransition}, background-color 0.3s ease-out, border-radius 0.3s ease-out`,
  backgroundColor: "transparent",
  borderTopLeftRadius: "0",
  borderBottomLeftRadius: "0",
  marginTop: "1rem",
  selectors: {
    "&.active": {
      transform: "translateX(0)",
      opacity: 1,
      pointerEvents: "auto",
      backgroundColor: "rgba(54,181,203,0.9)",
      borderTopLeftRadius: "24px",
      borderBottomLeftRadius: "24px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      marginTop: "0",
      position: "static",
      display: "flex",
      flexDirection: "row",
      boxShadow: "none",
      padding: 0,
      transform: "none",
      opacity: 1,
      pointerEvents: "auto",
      transition: "none",
      backgroundColor: "transparent",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
  },
});

export const menuListStyles = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
});

export const menuItemStyles = style({
  margin: "16px",
  fontSize: "large",
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      margin: "0 0 0 20px",
    },
  },
});

export const menuItemLinkStyles = style({
  display: "inline-block",
  padding: "10px 15px",
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  borderRadius: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

export const highlightStyles = style({
  fontWeight: "bold",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});