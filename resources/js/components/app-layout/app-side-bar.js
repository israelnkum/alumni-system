import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Divider, Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const AppSideBar = (props) => {
  const rootSubmenuKeys = ['students', 'users', 'staff']
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
            <div align={'center'}>
                <img style={{ marginTop: 20 }} height={'auto'} width={100} alt={'ALumini System'} src={'/imgs/logo.jpeg'}/>
            </div>
            <Divider/>
            <Menu disabled={!props.passwordUpdated} theme="dark" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} defaultSelectedKeys={['1']}>
                <Menu.Item key="home" icon={<VideoCameraOutlined />}>
                    <Link to={'/home'}>Home</Link>
                </Menu.Item>
                <Menu.SubMenu key="students" icon={<UserOutlined />} title="Students">
                    <Menu.Item key="all-students">
                        <Link to={'/students'}>All Students</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="staff" icon={<UserOutlined />} title="Staff">
                    <Menu.Item key="all-staff">
                        <Link to={'/staff'}>All Staff</Link>
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
