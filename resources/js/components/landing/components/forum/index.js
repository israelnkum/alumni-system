import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { handleGetLandingTopics } from '../../../../actions/landing/Actions'
import { connect } from 'react-redux'
import TopicList from '../../../commons/topic-list'
import { Spin } from 'antd'

const Forum = (props) => {
  const [fetching, setFetching] = useState(false)
  useEffect(() => {
    setFetching(true)
    props.getAllTopics().then(() => {
      setFetching(false)
    })
  }, [])
  return (
        <Spin spinning={fetching}>
            <div className="block featureBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Forum</h2>
                    </div>
                    <TopicList topics={props.topics} landing={'/landing'} authUser={0}/>
                </div>
            </div>
        </Spin>
  )
}

Forum.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Forum)
