import Link from "next/link";
import Layout from "../components/Layout";
import { styled, media } from "../theme";
import { css, keyframes } from "@emotion/core";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Header>Hello Next.js 👋</Header>
    <Header variant="secondary">Hello Luis del Amo 🤓</Header>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
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
  animation: ${bounce} 1s ease infinite;
`;

const Header = styled.h1<{ variant?: "primary" | "secondary" }>`
  text-align: center;
  color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.colors.secondary : theme.colors.primary};
  ${({ variant }) => variant === "secondary" && bouncy};
  border: 1px solid black;
  ${media.giant`padding: 100px;border-color: red`};
  ${media.desktop`padding: 50;border-color: blue`};
  ${media.tablet`padding: 20px;border-color: green`};
  ${media.phone`padding: 10px;border-color: lightcoral`};
  ${media.minWith`background-color: lightyellow`};
`;

export default IndexPage;
