import React from 'react'
import Catalog from './components/catalog'
import Login from './components/login'
import Nav from './nav'

const Home = () => {
    return (
        <>
            <Nav />

            <section className='home'>
                <div className='top_banner'>
                    {/* <Catalog /> */}
                    {/* <Login /> */}
                    {/* //proximamente el catalogo */}
                </div>
            </section>
        </>
    )
}

export default Home