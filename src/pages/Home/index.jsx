import React from 'react'
import Header from '../../components/Header'
import Techs from '../../components/Techs'
import Intro from '../../components/Intro'
import AboutMe from '../../components/About_Me'
import Projects from '../../components/Projects'
import Contacts from '../../components/Contacts'

export default function Home() {

    return (
        <div className='flex flex-col text-white px-40 lg:px-80 py-10'>
            <Header />

            <Intro />

            <AboutMe />

            <Techs />

            <Projects />

            <Contacts />
        </div>
    )
}
