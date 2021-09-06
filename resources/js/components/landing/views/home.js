import React from 'react'

import AppHero from '../components/home/hero'
import AppAbout from '../components/home/about'
import AppEvent from '../components/home/event'
import CurrentAlumni from '../components/home/current'
import AppForum from '../components/home/forum'
import AppJobs from '../components/home/jobs'
import AppContact from '../components/home/contact'

const AppHome = () => {
  return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppEvent />
            <CurrentAlumni />
            <AppForum />
            <AppJobs />
            <AppContact />

        </div>
  )
}

export default AppHome
