import React, { useEffect } from 'react'
import { Card, Typography, Row, Col, Button } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleGetLandingTopics } from '../../../../actions/landing/Actions'
import UserAvatar from '../../../commons/user-avatar'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const { Meta } = Card

const AppForum = (props) => {
  const { topics, getAllTopics } = props
  const history = useHistory()

  useEffect(() => {
    getAllTopics()
  }, [])

  return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Forum</h2>
                    <p>Share your views on latest updates</p>
                </div>
                <Row justify="center" gutter={[10, 10]}>
                    {
                        topics.map((topic, index) => (
                          index < 4 && <Col key={topic.id} span={6}>
                                <Card hoverable
                                      onClick={() => {
                                        history.push(`/landing/forum/${topic.title}/${topic.id}`)
                                      }}
                                      cover={
                                          <img alt="image"
                                               src={`/storage/images/topics/${topic.photo || 'default.png'}`}
                                          />
                                      }>
                                    <Meta
                                        avatar={
                                            <UserAvatar name={topic.author}/>
                                        }
                                        title={topic.title}
                                        description={
                                            <>
                                                <Typography.Text type="secondary">
                                                    Author: {topic.author}
                                                </Typography.Text> <br/>
                                                <Typography.Text italic>
                                                    {topic.comment_count} Comments
                                                </Typography.Text>
                                            </>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))
                    }
                    <Col span={24} xs={24} lg={24} xl={24}>
                        <div align={'center'}>
                            <Link to={'/landing/forum'}>
                                <Button>View All Topics</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>

            </div>

        </div>

  )
}

AppForum.propTypes = {
  topics: PropTypes.array,
  getAllTopics: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    topics: state.LandingEventsReducer.topics
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllTopics: (data) => dispatch(handleGetLandingTopics(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppForum)
