import React from 'react'
import { connect } from 'react-redux'
import UserForm from './user-form'
import AllUsers from './all-users'
import AppPageHeader from '../app-layout/app-page-header'
import BulkUpload from './bulk-upload'

const Users = () => {
  return (
      <React.Fragment>
          <AppPageHeader title={'Users'} extras={[
              <UserForm key={'user-form'}/>,
              <BulkUpload key={'upload'}/>
          ]}/>
          <AllUsers/>
      </React.Fragment>
  )
}
export default connect()(Users)
