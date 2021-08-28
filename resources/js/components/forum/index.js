import React from 'react'
import EventForm from './event-form'
import AllEvents from './all-events'
import { Divider } from 'antd'
import AppPageHeader from '../app-layout/app-page-header'

const Events = () => {
  return (
        <React.Fragment>
            <AppPageHeader title={'Events'} extras={[
                <EventForm key={'1'}/>
            ]}/>
            <Divider/>
            <AllEvents/>
        </React.Fragment>
  )
}
export default Events
