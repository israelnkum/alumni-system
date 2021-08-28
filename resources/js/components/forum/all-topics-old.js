import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { List, message, Avatar, Spin } from 'antd'

import InfiniteScroll from 'react-infinite-scroller'
import { handleDeleteTopic, handleGetAllTopics } from '../../actions/forum/Actions'
import { connect } from 'react-redux'

const AllTopics = (props) => {
  const { getAllTopics, topics } = props
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    getAllTopics().then(() => {
      setLoading(false)
    })
  }

  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (topics.length > 14) {
      message.warning('Infinite List loaded all')
      setHasMore(false)
      setLoading(false)
      return
    }
    fetchData()
  }

  return (
        <div className="demo-infinite-container">
            <InfiniteScroll
                initialLoad={false}
                pageStart={1}
                loadMore={handleInfiniteOnLoad}
                hasMore={!loading && hasMore}
                useWindow={false}
            >
                <List
                    dataSource={topics.data}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.title}
                            />
                            <div>Content</div>
                        </List.Item>
                    )}
                >
                    {loading && hasMore && (
                        <div className="demo-loading-container">
                            <Spin />
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </div>
  )
}
AllTopics.propTypes = {
  topics: PropTypes.array.isRequired,
  getAllTopics: PropTypes.func.isRequired,
  deleteTopic: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    topics: state.TopicsReducer.topics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTopics: () => dispatch(handleGetAllTopics()),
    deleteTopic: (id) => dispatch(handleDeleteTopic(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTopics)
