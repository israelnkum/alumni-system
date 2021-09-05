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
  }, [topicId])

  return (
      <Spin spinning={loading}>
          {
              (loading === false && topicDetail) &&
              <Comments header={'Add Comment'} replyingToId={parseInt(topicId)} topic={topicDetail.title} author={topicDetail.author}>
                  {
                      topicDetail.comments && topicDetail.comments.map((comment) => (
                          <Comments commentOrReply={'reply'} header={'Reply'} key={comment.id} replyingToId={comment.id} topic={comment.text} author={comment.author.name}>
                              {
                                  comment.replies && comment.replies.map((reply) => (
                                      <Comments commentOrReply={'replyToReply'} key={reply.id} header={'Reply'} replyingToId={reply.id} topic={reply.text} author={reply.author}>
                                          {
                                              reply.replies && reply.replies.map((rep) => (
                                                  <Comments commentOrReply={'replyToReply'} key={rep.id} header={'Reply'} replyingToId={rep.id} topic={rep.text} author={rep.author}>

                                                      {
                                                          rep.replies && rep.replies.map((re) => (
                                                              <Comments disabled={true} commentOrReply={'replyToReply'} key={re.id} header={'Reply'} replyingToId={re.id} topic={re.text} author={re.author}/>
                                                          ))
                                                      }
                                                  </Comments>
                                              ))
                                          }
                                      </Comments>
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
