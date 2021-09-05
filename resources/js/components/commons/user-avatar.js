import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'antd'
export default function UserAvatar (props) {
  return (
      <Avatar style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf'
      }}>{props.name.charAt(0)}
      </Avatar>
  )
}

UserAvatar.propTypes = {
  name: PropTypes.string
}
