import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Comment } from 'antd'
import ReplyComment from '../replies/reply-comment'

const Comments = (props) => {
  const { topic, author } = props
  return (
      <Comment
          actions={[
              <ReplyComment key="comment-nested-reply-to"/>
              // <span key="comment-nested-reply-to">Reply to</span>
          ]}
          author={<a>{author}</a>}
          avatar={
              <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
              />
          }
          content={
              <p>
                  {topic}
              </p>
          }
      >
          {props.children}
      </Comment>
  )
}
Comments.propTypes = {
  children: PropTypes.node,
  topic: PropTypes.string,
  author: PropTypes.string
}

export default Comments
