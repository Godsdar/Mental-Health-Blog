import { createGlobalStyle } from "styled-components";

export const colorsPallete = {
  purple: "#343080",
  lightPurple: "#42468b",
  lighterPurple: "#7471c9",
  white: "#ffffff",
  font: "rgba(255 255 255 / 0.7)",
  fontStrong: "rgba(255 255 255 / 0.95)",
  border: "rgba(255, 255, 255, 0.12)",
  error: "#ff8a8a",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 1);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

  a {
    font-weight: 500;
    text-decoration: none;
  }

  body {
    min-width: 320px;
    background-image: red;
    color: ${colorsPallete.font};
  }

  h1 {
    font-size: 10em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }

  [href] {
    text-decoration: none;
    color: white;
  }
`;
