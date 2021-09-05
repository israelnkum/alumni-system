import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Collapse, Comment, Typography } from 'antd'
import ReplyForm from '../replies/reply-form'

const Comments = (props) => {
  const { topic, author, replyingToId, header, commentOrReply, disabled } = props
  return (
      <Comment
          actions={[
            disabled !== true &&
              <Collapse ghost key="comment-nested-reply-to" bordered={false}>
                  <Collapse.Panel className={'replyHeader'} showArrow={false} header={header} key="1">
                      <div style={{ width: '100%' }}>
                          <ReplyForm commentType={commentOrReply} initialValues={{ replyingToId: replyingToId, id: 0 }}/>
                      </div>
                  </Collapse.Panel>
              </Collapse>
          ]}
          author={<a>{author}</a>}
          avatar={
              <Avatar style={{
                color: '#f56a00',
                backgroundColor: '#fde3cf'
              }}>{author.charAt(0)}
              </Avatar>
          }
          content={
              <Typography.Text>
                  {topic}
              </Typography.Text>
          }
      >
          {props.children}
      </Comment>
  )
}
Comments.propTypes = {
  children: PropTypes.node,
  topic: PropTypes.string,
  author: PropTypes.string,
  replyingToId: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
  commentOrReply: PropTypes.string,
  disabled: PropTypes.bool
}

Comments.defaultProps = {
  commentOrReply: 'comment',
  disabled: false
}

export default Comments
