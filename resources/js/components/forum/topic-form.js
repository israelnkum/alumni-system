import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Drawer, Form, Button, Col, Row, Input, message, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { handleAddNewTopic, handleUpdateTopic } from '../../actions/forum/Actions'
import Picture from '../commons/picture'
const TopicForm = (props) => {
  const [visible, setVisible] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const { addTopic, updateTopic, initialValues, btnText } = props
  const [add, setAdding] = useState(false)
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setAdding(true)
    const formData = new FormData()
    formData.append('file', selectedFile)
    values.id !== 0 && formData.append('_method', 'PUT')
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) { formData.append(key, values[key]) }
    }
    (values.id === 0 ? addTopic(formData) : updateTopic(formData))
      .then(() => {
        setAdding(false)
        message.success('Topic ' + (values.id === 0 ? 'Added' : 'Updated'))
        form.resetFields()
        setSelectedFile(null)
        toggleForm()
      }).catch((error) => {
        setAdding(false)
        message.warning(error.response.data)
      })
  }

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
  const toggleForm = () => {
    setVisible(!visible)
  }

  return (
        <>
            <Button type="primary" onClick={toggleForm} size={'small'}>
                {btnText}
            </Button>

            <Drawer
                title={initialValues.id !== 0 ? 'Edit Topic' : 'Add New Topic'}
                width={500}
                onClose={toggleForm}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Spin spinning={add} tip={'Adding'}>
                    <Form form={form} layout="vertical"
                          initialValues={initialValues}
                          hideRequiredMark onFinish={onFinish}>
                        <Row gutter={16}>
                            <Col span={24} sm={24} xs={24} md={24} lg={24}>
                                <Picture selectedFile={selectedFile} uploadProps={uploadProps}/>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    name="title"
                                    rules={[{ required: true, message: 'Please enter topic' }]}
                                >
                                    <Input.TextArea placeholder={'Add a topic'}/>
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
                                <div style={{ textAlign: 'right' }}>
                                    <Button onClick={toggleForm} style={{ marginRight: 8 }}>
                                        Cancel
                                    </Button>
                                    <Button loading={add} htmlType={'submit'} type="primary">
                                        Submit
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Spin>
            </Drawer>
        </>
  )
}

TopicForm.propTypes = {
  addTopic: PropTypes.func.isRequired,
  updateTopic: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  btnIcon: PropTypes.node,
  btnText: PropTypes.any
}

TopicForm.defaultProps = {
  initialValues: { id: 0 },
  btnIcon: <React.Fragment><PlusOutlined /> New Topic</React.Fragment>,
  btnText: 'Add Topic'
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTopic: (payload) => dispatch(handleAddNewTopic(payload)),
    updateTopic: (payload) => dispatch(handleUpdateTopic(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm)
