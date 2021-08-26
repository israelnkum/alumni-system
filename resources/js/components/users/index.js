import React from 'react'
import { connect } from 'react-redux'
import UserForm from './user-form'

const Users = () => {
  return (
      <React.Fragment>
          <UserForm/>
      </React.Fragment>
  )
}
export default connect()(Users)
