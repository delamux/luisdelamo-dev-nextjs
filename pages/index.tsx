import React from 'react';
import Layout from "../components/Layout";
import { styled, media } from "theme";
import { css, keyframes } from "@emotion/core";

const IndexPage = () => (
  <Layout title="luisdelamo.dev" >
    <Header> Luis del amo </Header>
    <Header variant="secondary"> Luis del amo </Header>
  </Layout>
);

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(20px, -30px, 0);
  }

  70% {
    transform: translate3d(-20px, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const bouncy = css`
  animation: ${bounce} 1s ease;
`;

const Header = styled.h1<{ variant?: "primary" | "secondary" }>`
  text-align: center;
  color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.colors.secondary.light : theme.colors.secondary.main};
  ${({ variant }) => variant === "secondary" && bouncy};
  border: 1px solid black;
  ${media.giant`padding: 100px;border-color: red`};
  ${media.desktop`padding: 50;border-color: blue`};
  ${media.tablet`padding: 20px;border-color: green`};
  ${media.phone`padding: 10px;border-color: lightcoral`};
  ${media.minWith`background-color: lightyellow`};
`;

export default IndexPage;
