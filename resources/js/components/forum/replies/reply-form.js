import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Input, message, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { handleAddComment } from '../../../actions/forum/Actions'

const ReplyForm = (props) => {
  const { addComment, initialValues, commentType } = props
  const [add, setAdding] = useState(false)
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setAdding(true)
    const formData = new FormData()
    formData.append('type', commentType)
    values.id !== 0 && formData.append('_method', 'PUT')
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) { formData.append(key, values[key]) }
    }
    (values.id === 0 ? addComment(formData) : addComment(formData))
      .then(() => {
        setAdding(false)
        message.success('Comment ' + (values.id === 0 ? 'Added' : 'Updated'))
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
                    name="text"
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
                <Form.Item
                    label="Replying to"
                    name="replyingToId"
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
  addComment: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  btnIcon: PropTypes.node,
  type: PropTypes.string,
  commentType: PropTypes.string.isRequired
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
    addComment: (payload) => dispatch(handleAddComment(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyForm)
