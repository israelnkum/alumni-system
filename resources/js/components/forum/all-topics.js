import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { handleDeleteTopic, handleGetAllTopics } from '../../actions/forum/Actions'
import { connect } from 'react-redux'
import TopicList from '../commons/topic-list'

const AllTopics = (props) => {
  const { getAllTopics, topics, authUser } = props
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllTopics().then(() => {
      setLoading(false)
    })
  }, [])

  return (
    <Spin spinning={loading}>
      <TopicList topics={topics} authUser={authUser.id}/>
    </Spin>
  )
}
AllTopics.propTypes = {
  topics: PropTypes.array.isRequired,
  authUser: PropTypes.object.isRequired,
  getAllTopics: PropTypes.func.isRequired,
  deleteTopic: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    topics: state.TopicsReducer.topics,
    authUser: state.UsersReducer.authUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTopics: () => dispatch(handleGetAllTopics()),
    deleteTopic: (id) => dispatch(handleDeleteTopic(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTopics)
