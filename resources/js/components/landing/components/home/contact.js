import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

const { TextArea } = Input

const AppContact = () => {
  return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Contact Us</h2>
                    <p>Get In Touch With Us - Feedback within 24hours</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                      remember: true
                    }}

                >
                    <Form.Item
                        name="fullname"
                        rules={[
                          {
                            required: true,
                            message: 'Full Name!'
                          }
                        ]}
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Email!'
                          }
                        ]}
                    >
                        <Input

                            type="email"
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="number"
                        rules={[
                          {
                            required: true,
                            message: 'Telephone Number!'
                          }
                        ]}
                    >
                        <Input
                            placeholder="Telephone Number"
                        />
                    </Form.Item>
                    <Form.Item
                        name="subject"

                    >
                        <Input

                            type="text"
                            placeholder="Subject"
                        />
                    </Form.Item>
                    <Form.Item
                        name="message"
                    >
                        <TextArea
                            type="text"
                            placeholder="Message"
                        />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                          {
                            validator: (_, value) =>
                              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'))
                          }
                        ]}

                    >
                        <Checkbox>
                           I agree with terms and conditions
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                           Submit
                        </Button>

                    </Form.Item>
                </Form>
            </div>

        </div>

  )
}

export default AppContact
