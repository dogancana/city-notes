import * as React from 'react'
import { Header } from './header';
import styled from 'styled-components';

const Root = styled.div`
  background-color: #fefefe;
` 

export const Page: React.FunctionComponent = ({ children }) => (
  <Root>
    <Header />
    {children}
  </Root>
)