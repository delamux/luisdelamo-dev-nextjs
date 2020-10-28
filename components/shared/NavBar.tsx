import React, { ReactNode } from 'react'
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode
  title?: string
}

const NavBar = ({title = 'luisdelamo.dev'}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  </div>
)

export default NavBar
