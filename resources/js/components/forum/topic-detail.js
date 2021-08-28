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
              <Comments topic={topicDetail.title} author={topicDetail.author}>

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
