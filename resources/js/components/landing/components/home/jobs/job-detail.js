import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

const JobDetail = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  return (
        <>
            <Button size={'small'} onClick={showModal}>
                Details
            </Button>
            <Modal footer={null} title={props.title} visible={isModalVisible} onCancel={ () => setIsModalVisible(false)}>
                {parse(props.description) }
            </Modal>
        </>
  )
}

JobDetail.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

export default JobDetail
