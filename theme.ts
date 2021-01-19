export const LightTheme = {
  fg: "palevioletred",
  bg: "white",
  placeholder: "#ccc",
  cardRound: "10px",
  text: "#fff",
  textAccent: "palevioletred",
  unit: (n: number) => `${n * 10}px`,
  shadown1: "box-shadow: 5px 5px 11px -1px rgba(181,181,181,0.67);",
  shadown2: "box-shadow: 10px 10px 11px -1px rgba(181,181,181,0.67);",
};

export const DarkTheme = {
  fg: LightTheme.bg,
  bg: LightTheme.fg,
};
