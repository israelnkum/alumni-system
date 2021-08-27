import React from 'react'
import JobForm from './job-form'
import AllJobs from './all-jobs'
import { Divider } from 'antd'
import AppPageHeader from '../app-layout/app-page-header'

const Jobs = () => {
  return (
        <React.Fragment>
            <AppPageHeader title={'Jobs'} extras={[
                <JobForm key={'1'}/>
            ]}/>
            <Divider/>
            <AllJobs/>
        </React.Fragment>
  )
}
export default Jobs
