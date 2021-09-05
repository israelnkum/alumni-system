import React, { useState } from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, message } from 'antd'
import { connect } from 'react-redux'
import Picture from '../commons/picture'
import PropTypes from 'prop-types'
import { handleAddNewUser, handleUpdateUser } from '../../actions/users/Actions'

const { Option } = Select

const UserForm = (props) => {
  const { addUser, initialValues, updateUser, btnText } = props
  const [visible, setVisible] = useState(false)
  const [add, setAdding] = useState(false)
  const showDrawer = () => {
    setVisible(!visible)
  }

  const [selectedFile, setSelectedFile] = useState(null)
  const [form] = Form.useForm()
  const uploadProps = {
    beforeUpload: (file) => {
      setSelectedFile(file)
      return true
    },
    listType: 'picture-card',
    maxCount: 1,
    onRemove: () => {
      setSelectedFile(null)
    },
    accept: 'image/*',
    method: 'get'
  }
  const onFinish = (values) => {
    setAdding(true)

    const formData = new FormData()
    formData.append('file', selectedFile)
    values.id !== 0 && formData.append('_method', 'PUT')
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) { formData.append(key, values[key]) }
    }
    (values.id === 0 ? addUser(formData) : updateUser(formData))
      .then(() => {
        setAdding(false)
        message.success('User ' + (values.id === 0 ? 'Added' : 'Updated'))
        form.resetFields()
        setSelectedFile(null)
        showDrawer()
      }).catch((error) => {
        setAdding(false)
        message.warning(error.response.data)
      })
  }

  return (
        <>
            <Button size={'small'} type="primary" onClick={showDrawer}>
                {btnText}
            </Button>
            <Drawer
                title="Create a new account"
                width={300}
                onClose={showDrawer}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Form initialValues={initialValues} layout="vertical" onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={24} sm={24} xs={24} md={24} lg={24}>
                            <Picture selectedFile={selectedFile} uploadProps={uploadProps}/>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter name' }]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="username"
                                label="Username"
                                rules={[{ required: true, message: 'Please enter username' }]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="ID"
                                name="id"
                                hidden
                                rules={[
                                  {
                                    required: true,
                                    message: 'Required'
                                  }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                  { type: 'email', message: 'Invalid email' }
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="userType"
                                label="User Type"
                                rules={[
                                  { required: true, message: 'Select User Type' }
                                ]}
                            >
                            <Select style={{ width: '100%' }}>
                                <Option value="alumni">Alumni</Option>
                                <Option value="admin">Admin</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <div
                                style={{
                                  textAlign: 'right'
                                }}
                            >
                                <Button onClick={showDrawer} style={{ marginRight: 8 }}>
                                    Cancel
                                </Button>
                                <Button loading={add} htmlType={'submit'} type="primary">
                                    Submit
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
  )
}
UserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  btnText: PropTypes.any
}

UserForm.defaultProps = {
  initialValues: {
    id: 0
  },
  btnText: 'New account'
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (payload) => dispatch(handleAddNewUser(payload)),
    updateUser: (payload) => dispatch(handleUpdateUser(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
