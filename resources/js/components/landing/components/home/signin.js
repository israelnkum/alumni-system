import React, { useState } from 'react'
import { Modal, Typography, Form, Input, Button, Checkbox } from 'antd'

const AppSignIn = () => {
  const [visible, setVisible] = useState(false)

  const toggleModal = () => {
    setVisible(!visible)
  }

  return (
        <div>
            <Typography.Text onClick={() => { toggleModal() }}>Sign In</Typography.Text>
            <Modal
                title="Alumni - Log in"
                centered
                visible={visible}
                onOk={() => toggleModal()}
                onCancel={() => toggleModal()}
            >
                <Form
                    name="basic"
                    labelCol={{
                      span: 8
                    }}
                    wrapperCol={{
                      span: 16
                    }}
                    initialValues={{
                      remember: true
                    }}

                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!'
                          }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!'
                          }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                          offset: 8,
                          span: 16
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>

  )
}
export default AppSignIn
