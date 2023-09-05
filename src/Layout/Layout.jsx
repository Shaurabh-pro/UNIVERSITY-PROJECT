import React from 'react'
import Header from '../components/Header/Header'
import Routers from '../Routers/Routers'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Header />
    <main>
        <Routers />
    </main>
    <Footer />
    </>
  )
}

export default Layout