import React from 'react'
import { Carousel, Button } from 'antd'

const items = [
  {
    key: '1',
    title: 'Takoradi Technical University Alumni',
    content: 'Adwen, Akoma na Nsa ma Mpuntu.'
  },
  {
    key: '2',
    title: 'Alumni Association of TTU',
    content: 'Adwen, Akoma na Nsa ma Mpuntu.'
  },
  {
    key: '3',
    title: 'Stay Connected with Other members',
    content: 'Adwen, Akoma na Nsa ma Mpuntu.'
  }
]

const AppHero = () => {
  return (
        <div className="heroBlock">
            <Carousel>
                {items.map(item => {
                  return (
                        <div className="container-fluid" key={item.key}>
                        <div className="content">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <div className="btnHolder">
                                <Button type="primary" size="large">Learn More</Button>
                                <Button size="large" >Contact Us</Button>

                            </div>
                        </div>
                        </div>
                  )
                })};

            </Carousel>

        </div>
  )
}

export default AppHero
