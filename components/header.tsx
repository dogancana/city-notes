import * as React from "react";
import styled from "styled-components";

const Root = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid grey;
  text-align: center;
  line-height: 60px;
`;

export const Header: React.FunctionComponent = () => <Root>Header</Root>;
