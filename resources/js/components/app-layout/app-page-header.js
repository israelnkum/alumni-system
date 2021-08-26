import React from 'react'
import PropTypes from 'prop-types'
import { PageHeader } from 'antd'

const AppPageHeader = (props) => {
  const { extras, title } = props
  return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={title}
                extra={extras}/>
        </div>
  )
}
export default AppPageHeader

AppPageHeader.propTypes = {
  extras: PropTypes.array,
  title: PropTypes.string
}
