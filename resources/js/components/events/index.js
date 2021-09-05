import React from 'react'
import EventForm from './event-form'
import AllEvents from './all-events'
import { Divider } from 'antd'
import AppPageHeader from '../app-layout/app-page-header'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Events = (props) => {
  return (
        <React.Fragment>
            {
                props.userType === 'admin' &&
                <AppPageHeader title={'Events'} extras={[
                    <EventForm key={'1'}/>
                ]}/>
            }
            <Divider/>
            <AllEvents/>
        </React.Fragment>
  )
}

Events.propTypes = {
  userType: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    userType: state.UsersReducer.authUser.userType
  }
}

export default connect(mapStateToProps)(Events)
