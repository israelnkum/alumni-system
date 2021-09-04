import React from 'react'
import { Row, Col, Card } from 'antd'

const { Meta } = Card

const AppEvent = () => {
  return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Upcoming Events</h2>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="Get Together" src="/imgs/get.jpg" />}
                        >
                            <Meta title="Alumni Get-Together" description="Venue is at the schools' auditorium" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="Fashion" src="/imgs/fair.JPG" />}
                        >
                            <Meta title="Fashion Design Training" description="Venue is at the schools' auditorium" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="jams" src="/imgs/jams.jpeg" />}
                        >
                            <Meta title="Jamm at Ease" description="Venue is at the schools' auditorium" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="sod cutting" src="/imgs/sod.jpeg" />}
                        >
                            <Meta title="Sod Cutting at Akatakyi Campus" description="Venue is at the schools' auditorium"/>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="lab" src="/imgs/lab.JPG" />}
                        >
                            <Meta title="Commemoration of New IT labs" description="Venue is at the schools' auditorium" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="induction" src="/imgs/induction.jpg" />}
                        >
                            <Meta title="Investiture and Induction" description="Venue is at the schools' auditorium" />
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
  )
}
export default AppEvent
