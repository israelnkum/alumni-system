import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Drawer, Form, Button, Col, Row, Input, message, Spin, Typography, DatePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'

import { handleAddNewJob, handleUpdateJob } from '../../actions/jobs/Actions'
const JobForm = (props) => {
  const { addJob, updateJob, initialValues, btnIcon, type } = props
  const [selectedFile, setSelectedFile] = useState(null)
  const [add, setAdding] = useState(false)
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const toggleForm = () => {
    setVisible(!visible)
  }

  const onFinish = (fieldsValue) => {
    setAdding(true)

    const rangeTimeValue = fieldsValue.closingDate
    const values = {
      ...fieldsValue,
      closingDate: rangeTimeValue.format('YYYY-MM-DD hh:mm A')
    }
    const formData = new FormData()
    formData.append('file', selectedFile)
    values.id !== 0 && formData.append('_method', 'PUT')
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) { formData.append(key, values[key]) }
    }
    (values.id === 0 ? addJob(formData) : updateJob(formData))
      .then(() => {
        setAdding(false)
        message.success('Job ' + (values.id === 0 ? 'Added' : 'Updated'))
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
                      : 'Add New Job'
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
                                    name="title"
                                    label="Job Title"
                                    rules={[{ required: true, message: 'Please enter name' }]}>
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
                            <Col span={12}>

                                <Form.Item
                                    name="location"
                                    label="Location"
                                    rules={[{ required: true, message: 'Please enter location' }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="closingDate" label="Closing Date">
                                    <DatePicker showTime format="YYYY-MM-DD hh:mm A" />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item name="description" label="Description"
                                           rules={[
                                             {
                                               required: true,
                                               message: 'Please select Description!'
                                             }
                                           ]}
                                           getValueFromEvent={(event, editor) => {
                                             return editor.getData()
                                           }}>
                                    <CKEditor data={initialValues.description} editor={ClassicEditor} />
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

JobForm.propTypes = {
  addJob: PropTypes.func.isRequired,
  updateJob: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  btnIcon: PropTypes.node,
  type: PropTypes.string
}

JobForm.defaultProps = {
  initialValues: { id: 0, description: '' },
  btnIcon: <React.Fragment><PlusOutlined /> New Job</React.Fragment>,
  type: 'button'
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addJob: (payload) => dispatch(handleAddNewJob(payload)),
    updateJob: (payload) => dispatch(handleUpdateJob(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobForm)
