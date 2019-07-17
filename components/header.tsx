import * as React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

export const Header: React.FunctionComponent = () => (
  <AppBar>
    <Toolbar>
      <Typography>
        <FormattedMessage id='header.title'/>
      </Typography>
    </Toolbar>
  </AppBar>
);
