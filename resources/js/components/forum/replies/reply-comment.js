import React from 'react'
import { Collapse } from 'antd'
import ReplyForm from './reply-form'

export default function ReplyComment () {
  return (
        <Collapse ghost
            bordered={false}>
            <Collapse.Panel className={'replyHeader'} showArrow={false} header="Reply to" key="1">
                <div style={{ width: '100%' }}>
                    <ReplyForm/>
                </div>
            </Collapse.Panel>
        </Collapse>
  )
}
