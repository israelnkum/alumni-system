import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd'
import { connect } from 'react-redux'
import { handleGetUpcomingEvents } from '../../../../actions/landing/Actions'

const { Meta } = Card

const AppEvent = (props) => {
  const { events, upcomingEvents } = props
  useEffect(() => {
    upcomingEvents()
  }, [])
  return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Upcoming Events</h2>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        events.map((event) => (
                            <Col span={8} key={event.id}>
                                <Card
                                    hoverable
                                    cover={<img alt="Get Together" src={`/storage/images/events/${event.photo}`} />}
                                >
                                    <Meta title={event.name} description={event.description} />
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>

        </div>
  )
}

AppEvent.propTypes = {
  events: PropTypes.array.isRequired,
  upcomingEvents: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    events: state.LandingEventsReducer.events
  }
}
const mapDispatchToProps = dispatch => {
  return {
    upcomingEvents: (data) => dispatch(handleGetUpcomingEvents(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppEvent)
