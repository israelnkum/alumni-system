import React from 'react'
import {Menu} from "antd";

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
                    <Menu.Item key="signIn">Sign In</Menu.Item>
                    <Menu.Item key="signUp">Sign Up</Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default AppHeader
