import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, Form, message, Row, Col, Upload, Progress, Typography, Select } from 'antd'
import { connect } from 'react-redux'
import { UploadOutlined } from '@ant-design/icons'
import { handleUploadUsers } from '../../actions/users/Actions'

const BulkUpload = (props) => {
  const { uploadUsers, type, btnIcon } = props
  const [file, setFile] = useState(null)
  const [form] = Form.useForm()

  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const uploadProps = {
    beforeUpload: (file) => {
      setFile(file)
      return true
    },
    listType: 'text',
    maxCount: 1,
    onRemove: () => {
      setFile(null)
    },
    // accept: 'image/*',
    method: 'get'
  }
  const submit = async (values) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('userType', values.userType)
    uploadUsers(formData).then(() => {
      message.success('Upload Successful')
      form.resetFields()
      setVisible(false)
      setUploading(false)
    }).catch((error) => {
      message.warning(error.response.data)
      setUploading(false)
    })
  }

  const validate = (errorInfo) => {
    message.warning('Invalid Data')
  }

  useEffect(() => {

  }, [])

  return (
        <>
            {
                type === 'button'
                  ? <Button type="primary" onClick={() => { setVisible(true) }} size={'small'}>
                        {btnIcon}
                    </Button>
                  : <Typography.Paragraph style={{ color: '#fff' }} onClick={() => { setVisible(true) }}>{ btnIcon }</Typography.Paragraph>
            }
            <Modal onCancel={() => setVisible(false)} footer={null} visible={visible} title="Upload Users">
                <Form
                    form={form}
                    onFinish={submit}
                    onFinishFailed={validate}
                    layout="vertical"
                    name="uploadUsersForm">
                    <Row gutter={[20, 20]} justify={'center'}>
                        {/* <Col span={24} xs={24} sm={24} md={24}>
                            <Button onClick={() => { downloadFormat() }} type={'primary'} icon={<DownloadOutlined />}>Download Upload Format</Button>
                        </Col> */}
                        <Col span={24} xs={24} sm={24}>
                            <Typography.Text>
                                Create and excel sheet with [Name, Username, Password] Columns
                            </Typography.Text>
                        </Col>
                        <Col span={8} xs={24} sm={24} md={8}>
                            <div align={'center'}>
                                <Upload {...uploadProps}>
                                    <Button block icon={<UploadOutlined />}>
                                        {file == null ? 'Select' : 'Change'} File
                                    </Button>
                                </Upload>
                            </div>
                        </Col>
                        <Col span={16} xs={24} sm={24} md={16}>
                            <Form.Item name="userType"
                                rules={[{ required: true, message: 'Please select user type' }]}>
                                <Select placeholder={'User Type'}>
                                    <Select.Option value={'alumni'}>Alumni</Select.Option>
                                    <Select.Option value={'admin'}>Admin</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        {
                            uploading === true &&
                            <Col span={24} xs={24} sm={24}>
                                <Progress
                                    strokeLinecap={'butt'}
                                    showInfo={false}
                                    size={'small'}
                                    strokeColor={{
                                      from: '#108ee9',
                                      to: '#87d068'
                                    }}
                                    percent={99.9}
                                    status="active"
                                />
                            </Col>
                        }

                        <Col span={24} xs={24} sm={24}>
                            <Form.Item>
                                <div align={'right'}>
                                    <Button loading={loading} onClick={() => { setVisible(false) }} >
                                        Cancel
                                    </Button>
                                    <Button disabled={file === null} loading={uploading} type="primary" htmlType="submit">
                                        {uploading === true ? 'Uploading' : 'Start Upload'}
                                    </Button>
                                </div>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
  )
}
BulkUpload.propTypes = {
  uploadUsers: PropTypes.func.isRequired,
  btnIcon: PropTypes.node,
  type: PropTypes.string
}

BulkUpload.defaultProps = {
  btnIcon: <React.Fragment><UploadOutlined /> Upload</React.Fragment>,
  type: 'button'
}
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadUsers: (data) => dispatch(handleUploadUsers(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BulkUpload)
