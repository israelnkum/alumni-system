import React from 'react'
import { Menu } from 'antd'
import AppSignup from '../home/signup'
import AppSignIn from '../home/signin'

const AppHeader = () => {
  return (
        <div className="container-fluid">
            <div className='header'>
                <div className="logo">
                    <img className="img" src="/imgs/logo.png"/>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="event">Events</Menu.Item>
                    <Menu.Item key="forum">Forum</Menu.Item>
                    <Menu.Item key="jobs">Jobs</Menu.Item>
                    <Menu.Item key="signUp">
                        <AppSignup/>
                    </Menu.Item>
                    <Menu.Item key="signIn">
                        <AppSignIn />
                    </Menu.Item>
                </Menu>
            </div>
        </div>
  )
}

export default AppHeader
