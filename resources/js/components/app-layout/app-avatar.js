import React, { useState } from 'react'
import { Dropdown, Card, Avatar, Typography, Spin } from 'antd'
import { DownOutlined, LockOutlined, PoweroffOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleLogout } from '../../actions/logout/LogoutAction'

const AppAvatar = (props) => {
  const [loading, setLoading] = useState(false)

  const initiateLogout = () => {
    setLoading(true)
    props.logout().then(() => {
      window.location.reload()
      window.location.replace('/login')
      setLoading(false)
    })
  }
  const menu = (
        <React.Fragment>
            <Spin spinning={loading}>
                <Card className={'profile-card'} style={{ width: 200 }} actions={[
                    <Link to={'/password/change'} key="change-password">
                        <LockOutlined title={'Change Password'} />
                    </Link>,
                    // <UserOutlined key="profile" title={'Profile'}/>,
                    <PoweroffOutlined onClick={() => initiateLogout()} key="logout" title={'Logout'}/>
                ]}>
                    <div align={'center'}>
                        {/* <Avatar style={{ backgroundColor: '#00317c' }} src={`/storage/images/users/${props.photo}`} /> */}
                        <Avatar style={{ backgroundColor: '#00317c' }}>
                            {props.name.charAt(0)}
                        </Avatar>
                        <br/>
                        <Typography.Text>{props.name}</Typography.Text>
                    </div>
                </Card>
            </Spin>
        </React.Fragment>
  )
  return (
        <Dropdown
            overlay={menu}
        >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hi {props.name.split(' ')[0]} &nbsp;<DownOutlined />
            </a>
        </Dropdown>
  )
}
AppAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  logout: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    name: state.UsersReducer.authUser.name,
    photo: state.UsersReducer.authUser.photo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(handleLogout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppAvatar)
