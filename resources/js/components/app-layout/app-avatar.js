import React from 'react'
import { Menu, Dropdown, Card, Avatar, Typography } from 'antd'
import { DownOutlined, LockOutlined, EditOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const AppAvatar = () => {
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
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    <br/>
                    <Typography.Text>Tracy Sarah</Typography.Text>
                    <br/>
                    0718000075
                </div>
            </Card>

        </React.Fragment>
  )
  return (
        <Dropdown
            overlay={menu}
        >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hi Tracy &nbsp;<DownOutlined />
            </a>
        </Dropdown>
  )
}

export default AppAvatar
