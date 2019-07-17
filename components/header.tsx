import * as React from "react";
import { Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { theme } from './theme'

const Root = styled.header`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
`;

export const Header: React.FunctionComponent = () => (
  <Root>
    <Typography variant='h6'>
      <FormattedMessage id="header.title" />
    </Typography>
  </Root>
);
