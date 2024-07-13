import React from 'react'
import Catalog from './components/catalog'
import Nav from './nav'

const Home = () => {
    return (
        <>
            <Nav />

            <section className='home'>
                <div className='top_banner'>
                    <Catalog />
                    {/* //proximamente el catalogo */}
                </div>
            </section>
        </>
    )
}

export default Home