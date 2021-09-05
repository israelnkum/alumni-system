import React from 'react'
import TopicDetail from '../../../forum/topic-detail'
import { Card, Col, Row } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TopicList from '../../../commons/topic-list'

const Details = (props) => {
  return (
      <div className="block featureBlock bgGray">
          <div className="container-fluid">
              <div className="titleHolder">
                  <h3>Forum</h3>
              </div>
              <Row gutter={[10, 10]}>
                  <Col span={16}>
                      <Card size={'small'}>
                          <TopicDetail/>
                      </Card>
                  </Col>
                  <Col span={8}>
                      <Card size={'small'} title={'Other Topics'} style={{ background: 'transparent' }}>
                          <TopicList landing={'/landing'} topics={props.topics} authUser={0}/>
                      </Card>
                  </Col>
              </Row>
          </div>
      </div>
  )
}
Details.propTypes = {
  topics: PropTypes.array
}

const mapStateToProps = state => {
  return {
    topics: state.LandingEventsReducer.topics
  }
}

export default connect(mapStateToProps)(Details)
