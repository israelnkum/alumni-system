import React from 'react'

import { Anchor, BackTop, Space } from 'antd'
import { Link } from 'react-router-dom'

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14
}

const AppFooter = () => {
  return (
            <div className="container-fluid">
                <div className="footer">
                    <div className="footerHolder">
                        <h2>Takoradi Technical University Alumni</h2>
                    </div>
                </div>
                <Space className="socials">
                    <a href="https://www.facebook.com"> <i className="fab fa-facebook"></i></a>
                    <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                </Space>
                    <div className="copyright">

                        <div className="logo" >
                            <Anchor>
                                <Link href={'#hero'} title={<img src={'/imgs/logo.png'} width={90}/>}/>
                            </Anchor>
                        </div>
                        Copyright &copy; 2021 TTU Alumni
                    </div>
                <BackTop>
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>

  )
}

export default AppFooter
