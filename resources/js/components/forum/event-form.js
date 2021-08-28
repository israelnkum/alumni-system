import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Drawer, Form, Button, Col, Row, Input, message, Spin, Typography, DatePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { handleAddNewEvent, handleUpdateEvent } from '../../actions/events/Actions'

const EventForm = (props) => {
  const { addEvent, updateEvent, initialValues, btnIcon, type } = props
  const [selectedFile, setSelectedFile] = useState(null)
  const [add, setAdding] = useState(false)
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const toggleForm = () => {
    setVisible(!visible)
  }

  const onFinish = (fieldsValue) => {
    setAdding(true)

    const rangeTimeValue = fieldsValue.startDateAndTime
    const values = {
      ...fieldsValue,
      startDateAndTime: [
        rangeTimeValue[0].format('YYYY-MM-DD hh:mm A'),
        rangeTimeValue[1].format('YYYY-MM-DD hh:mm A')
      ]
    }

    const formData = new FormData()
    formData.append('file', selectedFile)
    values.id !== 0 && formData.append('_method', 'PUT')
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) { formData.append(key, values[key]) }
    }
    (values.id === 0 ? addEvent(formData) : updateEvent(formData))
      .then(() => {
        setAdding(false)
        message.success('Event ' + (values.id === 0 ? 'Added' : 'Updated'))
        form.resetFields()
        setSelectedFile(null)
        toggleForm()
      }).catch((error) => {
        setAdding(false)
        message.warning(error.response.data)
      })
  }

  return (
        <>
            {
                type === 'button'
                  ? <Button type="primary" onClick={toggleForm} size={'small'}>
                        {btnIcon}
                    </Button>
                  : <Typography.Paragraph style={{ color: '#fff' }} onClick={toggleForm}>{ btnIcon }</Typography.Paragraph>
            }

            <Drawer
                title={
                    initialValues.id !== 0
                      ? 'Edit '
                      : 'Add New Event'
                }
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
                                <Form.Item name="startDateAndTime" label="Duration"
                                           rules={[
                                             {
                                               type: 'array',
                                               required: true,
                                               message: 'Please select duration!'
                                             }
                                           ]}>
                                    <DatePicker.RangePicker showTime format="YYYY-MM-DD hh:mm A" />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item name="description" label="Description">
                                   <Input.TextArea rows={4} />
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
