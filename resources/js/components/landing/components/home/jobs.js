import React, { useEffect } from 'react'
import { Button, Card, Col, Row, Typography } from 'antd'
import PropTypes from 'prop-types'
import { handleGetAvailableJobs } from '../../../../actions/landing/Actions'
import { connect } from 'react-redux'
import JobDetail from './jobs/job-detail'

const AppJobs = (props) => {
  const { jobs, availableJobs } = props

  useEffect(() => {
    availableJobs()
  }, [])
  return (
        <div id="jobs" className="block jobsBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Available Jobs</h2>
                </div>
                <Row gutter={[16, 16]} justify="center">
                    {
                        jobs.map((job) => (
                            <Col key={job.id} span={8}>
                                <div className="site-card-border-less-wrapper">
                                    <Card hoverable title={'Title: ' + job.title}
                                          bordered={false} style={{ width: 300 }}
                                          size={'small'}
                                          extra={[
                                             <JobDetail title={job.title} description={job.description} key={'detail'}/>
                                          ]}>
                                        <p>{job.location}</p>
                                        <Typography.Text>
                                            Closing Date:
                                            {job.closingDate}
                                        </Typography.Text>
                                    </Card>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>

        </div>
  )
}

AppJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  availableJobs: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    jobs: state.LandingEventsReducer.jobs
  }
}
const mapDispatchToProps = dispatch => {
  return {
    availableJobs: (data) => dispatch(handleGetAvailableJobs(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppJobs)
