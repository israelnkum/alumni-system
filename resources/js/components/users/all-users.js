import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { Avatar, Button, Image, message, Popconfirm, Space, Table, Typography } from 'antd'
import { connect } from 'react-redux'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { handleGetAllUsers } from '../../actions/users/Actions'
import UserForm from './user-form'

const { Column } = Table
function AllUsers (props) {
  const [loading, setLoading] = useState()
  const { users, allUsers, userType } = props
  useEffect(() => {
    setLoading(true)
    allUsers().then(() => {
      setLoading(false)
    })
  }, [])

  const handleDelete = (id) => {
    // setLoading(true)
    // deleteJob(id).then(() => {
    //   message.success('Job Deleted')
    //   setLoading(false)
    // }).catch((error) => {
    //   message.warning(error.response.data)
    //   setLoading(false)
    // })
  }
  return (
        <Table loading={loading} dataSource={users} rowKey={'id'}>
            <Column
                title="Image"
                render={(text, record) => (
                  // <Avatar src={`/storage/images/users/${record.photo}`}/>
                    <Avatar style={{ backgroundColor: '#00317c' }}>
                        {record.name.charAt(0)}
                    </Avatar>
                )}
            />
            <Column title="Name" dataIndex="name"/>
            <Column title="Email" dataIndex="email"/>
            <Column title="Username" dataIndex="username"/>
            {
                userType === 'admin' &&
                <Column
                    title="Action"
                    render={(text, record) => (
                        <Space>
                            <UserForm initialValues={record} btnText={<EditOutlined/>}/>
                            <Popconfirm title="Sure to delete?" onConfirm={() => { handleDelete(record.id) }} cancelText={'No'} okText={'Yes'}>
                                <Button size={'small'} danger icon={<DeleteOutlined/>}/>
                            </Popconfirm>
                        </Space>
                    )}
                />
            }

        </Table>
  )
}

AllUsers.propTypes = {
  users: PropTypes.array.isRequired,
  userType: PropTypes.string.isRequired,
  allUsers: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    users: state.UsersReducer.users,
    userType: state.UsersReducer.authUser.userType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allUsers: () => dispatch(handleGetAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
