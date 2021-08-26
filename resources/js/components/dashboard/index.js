import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import AppLayout from '../app-layout'
import Overview from './overview'
import Users from '../users'
import ChangePassword from '../change-password'
import { connect } from 'react-redux'
import { handleGetAuthUser } from '../../actions/users/Actions'
import { Spin } from 'antd'

const Dashboard = (props) => {
  const [loading, setLoading] = useState(true)
  const { authUser, getAuthUser } = props

  useEffect(() => {
    getAuthUser().then(() => {
      setLoading(false)
    })
  }, [])
  return (
        <Spin spinning={loading}>
            {
                loading === false &&
                <AppLayout>
                    {
                        (authUser === null || !authUser.passwordUpdated)
                          ? <ChangePassword/>
                          : <Switch>
                                <Route path={['/', '/home']} exact component={Overview}/>
                                <Route path={'/users'} exact component={Users}/>
                                <Route path={'/password/change'} exact component={ChangePassword}/>
                            </Switch>
                    }
                </AppLayout>
            }
        </Spin>
  )
}

Dashboard.propTypes = {
  authUser: PropTypes.object.isRequired,
  getAuthUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    authUser: state.UsersReducer.authUser
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAuthUser: () => dispatch(handleGetAuthUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
