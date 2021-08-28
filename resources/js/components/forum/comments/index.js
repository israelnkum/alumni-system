import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Avatar, Comment, Spin } from 'antd'
import { connect } from 'react-redux'
import { handleTopicDetail } from '../../actions/forum/Actions'
import { useParams } from 'react-router'

const TopicDetail = (props) => {
  const [loading, setLoading] = useState(true)
  const { children, topicDetail, getTopicDetail } = props
  const { topicId } = useParams()

  useEffect(() => {
    getTopicDetail(topicId).then(() => {
      setLoading(false)
    })
  }, [])

  return (
      <Spin spinning={loading}>
          {
              topicDetail &&
              <Comment
                  actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                  author={<a>Han Solo</a>}
                  avatar={
                      <Avatar
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          alt="Han Solo"
                      />
                  }
                  content={
                      <p>
                          We supply a series of design principles, practical patterns and high quality design
                          resources (Sketch and Axure).
                      </p>
                  }
              >
                  {children}
              </Comment>
          }
      </Spin>
  )
}
TopicDetail.propTypes = {
  children: PropTypes.node,
  topicDetail: PropTypes.object.isRequired,
  getTopicDetail: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    topicDetail: state.TopicsReducer.topicDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicDetail: (id) => dispatch(handleTopicDetail(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail)
