import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { List, Card, Space } from 'antd'
import { Link } from 'react-router-dom'
import { EditOutlined } from '@ant-design/icons'
import UserAvatar from '../commons/user-avatar'
import TopicForm from '../forum/topic-form'

const TopicList = (props) => {
  const { topics, authUser, landing } = props
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
                      authUser === item.authorId && <TopicForm btnText={<EditOutlined/>} initialValues={item} key={'edit'}/>
                    ]}>
                        <Card.Meta
                            avatar={<UserAvatar name={item.author}/>}
                            title={<Link to={`${landing}/forum/${item.title}/${item.id}`}>{item.title}</Link>}
                            description={
                                <Space>
                                    {'Author: ' + item.author}
                                    {item.comment_count + ' comments'}
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
TopicList.propTypes = {
  topics: PropTypes.array.isRequired,
  authUser: PropTypes.number.isRequired,
  landing: PropTypes.string
}

TopicList.defaultProps = {
  landing: ''
}

export default TopicList
