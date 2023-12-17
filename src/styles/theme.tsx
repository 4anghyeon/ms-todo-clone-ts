export type StyleType = {
  background: string;
  headerColor: string;
  subHeaderColor: string;
  subHeaderBackground: string;
  starColor: string;
};

const NORMAL_THEME: StyleType = {
  background: "#6377C7",
  headerColor: "white",
  subHeaderColor: "white",
  subHeaderBackground: "#5466ae",
  starColor: "#6377C7",
};

const STAR_THEME: StyleType = {
  background: "#FFE4EA",
  headerColor: "#AC395D",
  subHeaderColor: "white",
  subHeaderBackground: "#AC395D",
  starColor: "#AC395D",
};

const SEARCH_THEME: StyleType = {
  background: "#768490",
  headerColor: "#3e4b56",
  subHeaderColor: "white",
  subHeaderBackground: "#3e4b56",
  starColor: "#768490",
};

export const THEME = {
  NORMAL_THEME,
  STAR_THEME,
  SEARCH_THEME,
};
