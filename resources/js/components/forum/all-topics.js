import React, { useEffect, useState } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Button, message, Popconfirm, Space, Table } from 'antd'
import { connect } from 'react-redux'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import StaffForm from './event-form'
import { handleDeleteEvent, handleGetAllEvent } from '../../actions/events/Actions'

const { Column } = Table
function AllEvents (props) {
  const [loading, setLoading] = useState()
  const { events, getAllEvents, deleteEvent } = props
  useEffect(() => {
    setLoading(true)
    getAllEvents().then(() => {
      setLoading(false)
    })
  }, [])

  const handleDelete = (id) => {
    setLoading(true)
    deleteEvent(id).then(() => {
      message.success('event Deleted')
      setLoading(false)
    }).catch((error) => {
      message.warning(error.response.data)
      setLoading(false)
    })
  }
  return (
        <Table loading={loading} dataSource={events} scroll={{ x: 50 }} rowKey={'id'}>
            <Column title="Name" dataIndex="name"/>
            <Column title="Start Date" dataIndex="startDate"/>
            <Column title="End Date" dataIndex="endDate"/>
            <Column title="Description" dataIndex="description"/>
            <Column
                title="Action"
                render={(text, record) => (
                    <Space>
                        <StaffForm initialValues={{
                          ...record,
                          startDateAndTime: [
                            moment(record.startDate, 'YYYY-MM-DD hh:mm A'),
                            moment(record.endDate, 'YYYY-MM-DD hh:mm A')
                          ]
                        }} btnIcon={<EditOutlined />}/>
                        <Popconfirm title="Sure to delete?" onConfirm={() => { handleDelete(record.id) }} cancelText={'No'} okText={'Yes'}>
                            <Button size={'small'} danger icon={<DeleteOutlined/>}/>
                        </Popconfirm>
                    </Space>
                )}
            />
        </Table>
  )
}

AllEvents.propTypes = {
  events: PropTypes.array.isRequired,
  getAllEvents: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    events: state.EventsReducer.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEvents: () => dispatch(handleGetAllEvent()),
    deleteEvent: (id) => dispatch(handleDeleteEvent(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents)
