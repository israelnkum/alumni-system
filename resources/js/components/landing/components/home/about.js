import React from 'react'
import { Row, Col } from 'antd'
import { HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons'

const items = [
  {
    key: '1',
    icon: <HomeOutlined />,
    title: 'Faculties',
    content: '5'
  },
  {
    key: '2',
    icon: <UsergroupAddOutlined />,
    title: 'Department',
    content: '26'
  },
  {
    key: '3',
    icon: <UsergroupAddOutlined />,
    title: 'Alumni Members',
    content: '24000'
  }
]

const AppAbout = () => {
  return (
      <div id="about" className="block aboutBlock">
          <div className="container-fluid">
              <div className="titleHolder">
                  <h2>About Us</h2>
                  <p>Alumni Association of TTU</p>
              </div>
              <div className="contentHolder">
                <p>Takoradi Technical University is a public tertiary education institution located in Sekondi-Takoradi,
                    the capital of the Western Region of Ghana.
                    Takoradi Technical University was established as a Government Technical Institute in 1954,
                    and became part of the State Tertiary Education System.</p>
              </div>
          </div>
          <Row gutter={[16, 16]} >
              {items.map(item => {
                return (
                      <Col span={8} key={item.key}>
                          <div className="content">
                              <div className="icon">
                                  {item.icon}
                              </div>
                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                          </div>
                      </Col>
                )
              })}

          </Row>
      </div>
  )
}

export default AppAbout
