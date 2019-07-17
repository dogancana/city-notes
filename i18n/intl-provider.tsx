import * as React from "react";
import { IntlProvider } from "react-intl";
import en from "./en";

export const LanguageProvider: React.FunctionComponent = ({ children }) => (
  <IntlProvider locale="en" messages={en.messages}>
    <React.Fragment>{children}</React.Fragment>
  </IntlProvider>
);
