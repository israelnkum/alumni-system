import React from 'react'
import { Card, Col, Row } from 'antd'

const AppJobs = () => {
  return (
      <div className="block jobsBlock">
          <div className="container-fluid">
              <div className="titleHolder">
                  <h2>Available Jobs</h2>
              </div>
              <Row gutter={[16, 16]} justify="center">
                  <Col span={8}>
              <div className="site-card-border-less-wrapper">
              <Card hoverable title="Card title" bordered={false} style={{ width: 300 }}>
                  <p>Card content</p>

              </Card>
              </div>
                  </Col>
                  <Col span={8}>
                      <div className="site-card-border-less-wrapper">
                          <Card hoverable title="Card title" bordered={false} style={{ width: 300 }}>
                              <p>Card content</p>

                          </Card>
                      </div>
                  </Col>
                  <Col span={8}>
                      <div className="site-card-border-less-wrapper">
                          <Card hoverable title="Card title" bordered={false} style={{ width: 300 }}>
                              <p>Card content</p>

                          </Card>
                      </div>
                  </Col>
              </Row>
          </div>

      </div>
  )
}
export default AppJobs
