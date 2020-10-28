import React, { ReactNode } from 'react'
import Footer from './shared/Footer'
import NavBar from './shared/NavBar'

type Props = {
  children?: ReactNode
  title?: string
}
const Layout = ({ children, title = 'luisdelamo.dev' }: Props) => (
  <div>
    <NavBar title={title}></NavBar>
      {children}
    <Footer></Footer>
  </div>

)

export default Layout
