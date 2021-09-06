import React from 'react'
import { Carousel, Button, Anchor } from 'antd'

const { Link } = Anchor

const items = [
  {
    key: '1',
    title: 'Takoradi Technical University Alumni',
    content: 'Adwen, Akoma na Nsa ma Mpuntu'
  },
  {
    key: '2',
    title: 'Alumni Association of Takoradi Technical University',
    content: 'Service to the School'
  },
  {
    key: '3',
    title: 'Stay Connected with Other members',
    content: 'Get in touch, stay connected'
  }
]

const AppHero = () => {
  return (
        <div id="hero" className="heroBlock">
            <Carousel autoplay>
                {
                    items.map(item => {
                      return (
                            <div className="container-fluid" key={item.key}>
                                <div className="content">
                                    <h3 className="hero-title">{item.title}</h3>
                                    <p className="hero-content">{item.content}</p>
                                    <div className="btnHolder">
                                        <Anchor>
                                            <Link href={'#about'} title={<Button type="primary" size="large">Learn More</Button>}/>
                                            <Link href={'#contact'} title={<Button size="large">Contact Us</Button>}/>
                                        </Anchor>
                                    </div>
                                </div>
                            </div>
                      )
                    })
                }

            </Carousel>
        </div>
  )
}
export default AppHero
