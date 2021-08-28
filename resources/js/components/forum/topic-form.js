import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Col, Row, Input, message, Spin, DatePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { handleAddNewEvent, handleUpdateEvent } from '../../actions/events/Actions'

const EventForm = (props) => {
  const { addEvent, updateEvent, initialValues } = props
  const [add, setAdding] = useState(false)
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setAdding(true)
    const formData = new FormData()
    values.id !== 0 && formData.append('_method', 'PUT')
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) { formData.append(key, values[key]) }
    }
    (values.id === 0 ? addEvent(formData) : updateEvent(formData))
      .then(() => {
        setAdding(false)
        message.success('Event ' + (values.id === 0 ? 'Added' : 'Updated'))
        form.resetFields()
      }).catch((error) => {
        setAdding(false)
        message.warning(error.response.data)
      })
  }

  return (
      <Spin spinning={add} tip={'Adding'}>
          <Form form={form} layout="vertical"
                initialValues={initialValues}
                hideRequiredMark onFinish={onFinish}>
              <Row gutter={16}>
                  <Col span={24}>
                      <Form.Item
                          name="name"
                          label="Event Name"
                          rules={[{ required: true, message: 'Please enter event name' }]}
                      >
                          <Input />
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
                      <Button loading={add} htmlType={'submit'} type="primary">
                          Submit
                      </Button>
                  </Col>
              </Row>
          </Form>
      </Spin>
  )
}

EventForm.propTypes = {
  addEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  btnIcon: PropTypes.node,
  type: PropTypes.string
}

EventForm.defaultProps = {
  initialValues: { id: 0 },
  btnIcon: <React.Fragment><PlusOutlined /> New Event</React.Fragment>,
  type: 'button'
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (payload) => dispatch(handleAddNewEvent(payload)),
    updateEvent: (payload) => dispatch(handleUpdateEvent(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)
