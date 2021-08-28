import React, { useEffect, useState } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { List, message, Avatar, Spin, Card, Space } from 'antd'

import InfiniteScroll from 'react-infinite-scroller'
import { handleDeleteTopic, handleGetAllTopics } from '../../actions/forum/Actions'
import { connect } from 'react-redux'
import { EditOutlined } from '@ant-design/icons'
import TopicForm from './topic-form'

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
      <List
          pagination={{
            pageSize: 10
          }}
          grid={{ gutter: 16, column: 1 }}
          dataSource={topics}
          renderItem={item => (
              <List.Item
                  key={item.id}>
                  <Card size={'small'} title={moment(item.created_at).format('ddd, Do hA')} extra={[
                      <EditOutlined key={'edit'}/>
                  ]}>
                      <Card.Meta
                          avatar={
                              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          }
                          title={item.title}
                          description={
                              <Space>
                                  {'Author: ' + item.author}
                                  {item.comments + ' comments'}
                              </Space>
                          }
                      />
                  </Card>
              </List.Item>
          )}
      >
      </List>
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
