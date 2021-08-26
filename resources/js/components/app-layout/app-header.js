import React from 'react'
import PropTypes from 'prop-types'
import { Col, Layout, Row } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import AppAvatar from './app-avatar'

const AppHeader = (props) => {
  const { toggle, marginLeftHeader, collapsed } = props
  return (
      <Layout.Header className="site-layout-background" style={{ padding: 0, marginLeft: marginLeftHeader, position: 'fixed', zIndex: 1, width: '100%' }}>
          <Row wrap={false}>
              <Col span={5} sm={6} xs={6} md={18}>
                  {
                      React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle
                      })
                  }
              </Col>
              <Col span={5} sm={18} xs={18} md={6}>
                  <AppAvatar/>
              </Col>
          </Row>
      </Layout.Header>
  )
}

export default AppHeader

AppHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  marginLeftHeader: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired

}
