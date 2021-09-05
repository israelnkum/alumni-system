import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Spin } from 'antd'
import { FileProtectOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { handleGetInitialData } from '../../actions/users/Actions'
import { connect } from 'react-redux'
const Overview = (props) => {
  const [loading, setLoading] = useState(false)
  const { initialData, getInitialData } = props
  useEffect(() => {
    setLoading(true)
    getInitialData().then(() => {
      setLoading(false)
    })
  }, [])
  return (
      <Spin spinning={loading}>
          <Row style={{ marginBottom: 5 }} gutter={[20, 5]}>
              <Col span={24} xm={24} sm={6} lg={6}>
                  <Card className={'overviewCard1'}>
                      <Row gutter={20} justify={'center'} align={'middle'}>
                          <Col>
                              <FileProtectOutlined className={'dashIcon'}/>
                          </Col>
                          <Col>
                              <h6 className={'dashIconTitle'}>{initialData.jobs}</h6>
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
                              <h6 className={'dashIconTitle'}>{initialData.events}</h6>
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
                              <h6 className={'dashIconTitle'}>{initialData.users}</h6>
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
                              <h6 className={'dashIconTitle'}>{initialData.topics}</h6>
                              <h6 className={'dashIconText'}>
                                  Topics
                              </h6>
                          </Col>
                      </Row>
                  </Card>
              </Col>
          </Row>
      </Spin>
  )
}

Overview.propTypes = {
  initialData: PropTypes.object,
  getInitialData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    initialData: state.UsersReducer.initialData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getInitialData: () => dispatch(handleGetInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
