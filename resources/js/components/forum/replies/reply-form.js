import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Col, Row, Input, message, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { handleAddNewTopic, handleUpdateTopic } from '../../../actions/forum/Actions'

const ReplyForm = (props) => {
  const { addTopic, updateTopic, initialValues } = props
  const [add, setAdding] = useState(false)
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setAdding(true)
    const formData = new FormData()
    values.id !== 0 && formData.append('_method', 'PUT')
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) { formData.append(key, values[key]) }
    }
    (values.id === 0 ? addTopic(formData) : updateTopic(formData))
      .then(() => {
        setAdding(false)
        message.success('Topic ' + (values.id === 0 ? 'Added' : 'Updated'))
        form.resetFields()
      }).catch((error) => {
        setAdding(false)
        message.warning(error.response.data)
      })
  }

  return (

        <Spin spinning={add} tip={'Adding'}>
            <Form form={form} layout="vertical" style={{ width: 600 }}
                  initialValues={initialValues}
                  hideRequiredMark onFinish={onFinish}>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Please enter topic' }]}
                >
                    <Input.TextArea placeholder={'Add a reply'}/>
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

                <Button size={'small'} loading={add} htmlType={'submit'} type="primary">
                    Reply
                </Button>
            </Form>
        </Spin>
  )
}

ReplyForm.propTypes = {
  addTopic: PropTypes.func.isRequired,
  updateTopic: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  btnIcon: PropTypes.node,
  type: PropTypes.string
}

ReplyForm.defaultProps = {
  initialValues: { id: 0 },
  btnIcon: <React.Fragment><PlusOutlined /> New Topic</React.Fragment>,
  type: 'button'
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

export default connect(mapStateToProps, mapDispatchToProps)(ReplyForm)
