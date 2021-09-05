import React from 'react'
import { connect } from 'react-redux'
import UserForm from './user-form'
import AllUsers from './all-users'

const Users = () => {
  return (
      <React.Fragment>
          <UserForm/>
          <AllUsers/>
      </React.Fragment>
  )
}
export default connect()(Users)
