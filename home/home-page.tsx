import * as React from "react";
import styled, { css } from "styled-components";
import { Container, Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const fullElement = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const BackgroundImage = styled.img`
  ${fullElement}
  z-index: -2;
  object-fit: cover;
`;

const Tint = styled.div`
  ${fullElement}
  z-index: -1;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
`;

const MottoAndDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const MottoAndDescription = styled.div`
  max-width: 650px;
  color: white;
  text-align: center;
`;

export const HomePage: React.FunctionComponent = () => (
  <React.Fragment>
    <BackgroundImage src="/static/home/background.jpg" />
    <Tint />
    <MottoAndDescriptionWrapper>
      <MottoAndDescription>
        <Typography variant="h4">
          <FormattedMessage id="home.motto" />
        </Typography>
        <Typography variant="subtitle1">
          <FormattedMessage id="home.description" />
        </Typography>
      </MottoAndDescription>
    </MottoAndDescriptionWrapper>
  </React.Fragment>
);
