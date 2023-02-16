import React, { FC } from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";

function App({ Component, pageProps }:{ Component: FC, pageProps: Record<string, any>}) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
          <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
}

export default App;
