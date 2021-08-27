import React, { useEffect, useState } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { Button, message, Popconfirm, Space, Table, Typography } from 'antd'
import { connect } from 'react-redux'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import StaffForm from './job-form'
import { handleDeleteJob, handleGetAllJob } from '../../actions/jobs/Actions'

const { Column } = Table
function AllJobs (props) {
  const [loading, setLoading] = useState()
  const { jobs, getAllJobs, deleteJob } = props
  useEffect(() => {
    setLoading(true)
    getAllJobs().then(() => {
      setLoading(false)
    })
  }, [])

  const handleDelete = (id) => {
    setLoading(true)
    deleteJob(id).then(() => {
      message.success('Job Deleted')
      setLoading(false)
    }).catch((error) => {
      message.warning(error.response.data)
      setLoading(false)
    })
  }
  return (
        <Table loading={loading} dataSource={jobs} scroll={{ x: 50 }} rowKey={'id'}>
            <Column title="Job Title" dataIndex="title"/>
            <Column title="Location" dataIndex="location"/>
            <Column title="Closing Date" dataIndex="closingDate"/>
            <Column title="Description" render={(text, record) => (
                <Typography.Text>{parse(record.description)}</Typography.Text>
            )}/>
            <Column
                title="Action"
                render={(text, record) => (
                    <Space>
                        <StaffForm initialValues={{
                          ...record,
                          closingDate: moment(record.closingDate, 'YYYY-MM-DD hh:mm A')
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

AllJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  getAllJobs: PropTypes.func.isRequired,
  deleteJob: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    jobs: state.JobsReducer.jobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllJobs: () => dispatch(handleGetAllJob()),
    deleteJob: (id) => dispatch(handleDeleteJob(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs)
