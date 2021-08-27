import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Divider, Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import EventForm from '../events/event-form'

const AppSideBar = (props) => {
  const rootSubmenuKeys = ['events', 'users', 'jobs', 'forums']
  const [openKeys, setOpenKeys] = useState([])

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  return (
        <Layout.Sider style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0
        }} trigger={null} collapsible collapsed={props.collapsed}>
            <div className={'logo'} align={'center'}>
                <img height={'auto'} width={120} alt={'Alumni System'} src={'/imgs/logo.png'}/>
            </div>
            <Divider/>
            <Menu disabled={!props.passwordUpdated} theme="dark" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} defaultSelectedKeys={['1']}>
                <Menu.Item key="home" icon={<VideoCameraOutlined />}>
                    <Link to={'/home'}>Home</Link>
                </Menu.Item>
                <Menu.SubMenu key="events" icon={<UserOutlined />} title="Events">
                    <Menu.Item key="new-event">
                        <EventForm type={'text'}/>
                    </Menu.Item>
                    <Menu.Item key="all-events">
                        <Link to={'/events'}>All Events</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="jobs" icon={<UserOutlined />} title="Jobs">
                    <Menu.Item key="all-jobs">
                        <Link to={'/jobs'}>All Jobs</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="users" icon={<UserOutlined />} title="Users">
                    <Menu.Item key="new-user">Option 1</Menu.Item>
                    <Menu.Item key="all-users">
                        <Link to={'/users'}>Users</Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
  )
}
AppSideBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  passwordUpdated: PropTypes.number.isRequired
}

// AppSideBar.defaultProps = {
//   passwordUpdated: 0
// }

const mapStateToProps = (state) => {
  return {
    passwordUpdated: state.UsersReducer.authUser.passwordUpdated
  }
}
export default connect(mapStateToProps)(AppSideBar)
