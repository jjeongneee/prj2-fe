import React from "react";
import ReactDOM from "react-dom"; // ReactDOM 추가
import App from "./App";
import {ChakraProvider, ColorModeScript, CSSReset, extendTheme,} from "@chakra-ui/react";
import "./css/Fonts.css";

// 원하는 글꼴 패밀리로 사용자 정의 테마 정의
const theme = extendTheme({
  fonts: {
    heading: "SUITE-Regular",
    body: "SUITE-Regular",
  },

  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

// createRoot 대신 ReactDOM.render 사용
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById("root"),
);
