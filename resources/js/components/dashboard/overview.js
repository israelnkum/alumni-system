import React from 'react'
import { Button, Row, Col, Card } from 'antd'
import { FileProtectOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons'
const Overview = () => {
  return (
      <Row style={{ marginBottom: 5 }} gutter={[20, 5]}>
          <Col span={24} xm={24} sm={6} lg={6}>
              <Card className={'overviewCard1'}>
                  <Row gutter={20} justify={'center'} align={'middle'}>
                      <Col>
                          <FileProtectOutlined className={'dashIcon'}/>
                      </Col>
                      <Col>
                          <h6 className={'dashIconTitle'}>25</h6>
                          <h6 className={'dashIconText'}>
                              Jobs
                          </h6>
                      </Col>
                  </Row>
              </Card>
          </Col>
          <Col span={24} xm={24} sm={6} lg={6}>
              <Card className={'overviewCard1'}>
                  <Row gutter={20} justify={'center'} align={'middle'}>
                      <Col>
                          <ProfileOutlined className={'dashIcon'}/>
                      </Col>
                      <Col>
                          <h6 className={'dashIconTitle'}>20</h6>
                          <h6 className={'dashIconText'}>
                              Events
                          </h6>
                      </Col>
                  </Row>
              </Card>
          </Col>
          <Col span={24} xm={24} sm={6} lg={6}>
              <Card className={'overviewCard1'}>
                  <Row gutter={20} justify={'center'} align={'middle'}>
                      <Col>
                          <UserOutlined className={'dashIcon'}/>
                      </Col>
                      <Col>
                          <h6 className={'dashIconTitle'}>18</h6>
                          <h6 className={'dashIconText'}>
                              Users
                          </h6>
                      </Col>
                  </Row>
              </Card>
          </Col>
          <Col span={24} xm={24} sm={6} lg={6}>
              <Card className={'overviewCard1'}>
                  <Row gutter={20} justify={'center'} align={'middle'}>
                      <Col>
                          <ProfileOutlined className={'dashIcon'}/>
                      </Col>
                      <Col>
                          <h6 className={'dashIconTitle'}>25</h6>
                          <h6 className={'dashIconText'}>
                              Topics
                          </h6>
                      </Col>
                  </Row>
              </Card>
          </Col>
      </Row>
  )
}

export default Overview
