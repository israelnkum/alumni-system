import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import AppSideBar from './app-side-bar'
import AppHeader from './app-header'

const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [marginLeftHeader, setMarginLeftHeader] = useState(200)
  const toggle = () => {
    setCollapsed(!collapsed)
    setMarginLeftHeader(collapsed ? 200 : 80)
  }
  return (
        <Layout>
            <AppSideBar collapsed={collapsed}/>
            <Layout className="site-layout">
               <AppHeader collapsed={collapsed} marginLeftHeader={marginLeftHeader} toggle={toggle}/>
                <Layout.Content
                    style={{
                      margin: '80px 16px',
                      marginLeft: marginLeftHeader + 20,
                      minHeight: 600
                    }}>
                    {props.children}
                </Layout.Content>
            </Layout>
        </Layout>
  )
}

export default AppLayout
AppLayout.propTypes = {
  children: PropTypes.node
}
