import React from 'react'
import { Dropdown, Card, Avatar, Typography } from 'antd'
import { DownOutlined, LockOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const AppAvatar = (props) => {
  const menu = (
        <React.Fragment>
            <Card className={'profile-card'} style={{ width: 200 }} actions={[
                <Link to={'/password/change'} key="change-password">
                    <LockOutlined title={'Change Password'} />
                </Link>,
                <UserOutlined key="profile" title={'Profile'}/>,
                <PoweroffOutlined key="logout" title={'Logout'}/>
            ]}>
                <div align={'center'}>
                    <Avatar style={{ backgroundColor: '#00317c' }} src={`/storage/images/users/${props.photo}`} />
                    <br/>
                    <Typography.Text>{props.name}</Typography.Text>
                </div>
            </Card>

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
  photo: PropTypes.string
}
const mapStateToProps = (state) => {
  return {
    name: state.UsersReducer.authUser.name,
    photo: state.UsersReducer.authUser.photo
  }
}
export default connect(mapStateToProps)(AppAvatar)
