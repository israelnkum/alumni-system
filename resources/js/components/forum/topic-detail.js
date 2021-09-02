import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import { handleTopicDetail } from '../../actions/forum/Actions'
import { useParams } from 'react-router'
import Comments from './comments'

const TopicDetail = (props) => {
  const [loading, setLoading] = useState(true)
  const { topicDetail, getTopicDetail } = props
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
              <Comments header={'Add Comment'} replyingToId={parseInt(topicId)} topic={topicDetail.title} author={topicDetail.author}>
                  {
                      topicDetail.comments.map((comment) => (
                          <Comments commentOrReply={'reply'} header={'Reply'} key={comment.id} replyingToId={comment.id} topic={comment.text} author={comment.author.name}>
                              {
                                  comment.replies && comment.replies.map((reply) => (
                                      <Comments key={reply.id} header={'Reply'} replyingToId={reply.id} topic={reply.text} author={'osikani'}/>
                                  ))
                              }
                          </Comments>
                      ))
                  }
              </Comments>

          }
      </Spin>
  )
}
TopicDetail.propTypes = {
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
