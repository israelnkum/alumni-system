import React from 'react'
import JobForm from './job-form'
import AllJobs from './all-jobs'
import { Divider } from 'antd'
import AppPageHeader from '../app-layout/app-page-header'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Jobs = (props) => {
  return (
        <React.Fragment>
            {
                props.userType === 'admin' &&
                <AppPageHeader title={'Jobs'} extras={[
                    <JobForm key={'1'}/>
                ]}/>
            }

            <Divider/>
            <AllJobs/>
        </React.Fragment>
  )
}

Jobs.propTypes = {
  userType: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    userType: state.UsersReducer.authUser.userType
  }
}

export default connect(mapStateToProps)(Jobs)
