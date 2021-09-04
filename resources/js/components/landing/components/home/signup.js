import React, { useState } from 'react'
import { Modal, Typography, Form, Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'
const AppSignup = () => {
  const [visible, setVisible] = useState(false)

  const toggleModal = () => {
    setVisible(!visible)
  }

  const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                  width: 70
                }}
            >
                <Option value="233">+233</Option>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
  )

  return (
      <div>
          <Typography.Text onClick={() => { toggleModal() }}>Sign Up</Typography.Text>
          <Modal
              className="modal-view"
              title="Alumni - Create an Account"
              centered
              visible={visible}
              onOk={() => toggleModal()}
              onCancel={() => toggleModal()}
          >
             <Form>
                 <Form.Item
                     name="name"
                     label="Fullname"
                     rules={[
                       {
                         type: 'name',
                         message: 'Name does not exist. Not an alumni'
                       },
                       {
                         required: true,
                         message: 'Please input your Name!'
                       }
                     ]}
                 >
                     <Input />
                 </Form.Item>
                 <Form.Item
                     name="username"
                     label="Username"
                     rules={[
                       {
                         type: 'username',
                         message: 'Username taken'
                       },
                       {
                         required: true,
                         message: 'Please input your Username!'
                       }
                     ]}
                 >
                     <Input />
                 </Form.Item>
                 <Form.Item
                     name="email"
                     label="E-mail"
                     rules={[
                       {
                         type: 'email',
                         message: 'The input is not valid E-mail!'
                       },
                       {
                         required: true,
                         message: 'Please input your E-mail!'
                       }
                     ]}
                 >
                     <Input />
                 </Form.Item>
                 <Form.Item
                     name="phone"
                     label="Phone Number"
                     rules={[
                       {
                         required: true,
                         message: 'Please input your phone number!'
                       }
                     ]}
                 >
                     <Input
                         addonBefore={prefixSelector}
                         style={{
                           width: '100%'
                         }}
                     />
                 </Form.Item>

                 <Form.Item
                     name="password"
                     label="Password"
                     rules={[
                       {
                         required: true,
                         message: 'Please input your password!'
                       }
                     ]}
                     hasFeedback
                 >
                     <Input.Password />
                 </Form.Item>

                 <Form.Item
                     name="confirm"
                     label="Confirm Password"
                     dependencies={['password']}
                     hasFeedback
                     rules={[
                       {
                         required: true,
                         message: 'Please confirm your password!'
                       },
                       ({ getFieldValue }) => ({
                         validator (_, value) {
                           if (!value || getFieldValue('password') === value) {
                             return Promise.resolve()
                           }

                           return Promise.reject(new Error('The two passwords do not match!'))
                         }
                       })
                     ]}
                 >
                     <Input.Password />
                 </Form.Item>
             </Form>
          </Modal>
      </div>

  )
}
export default AppSignup
