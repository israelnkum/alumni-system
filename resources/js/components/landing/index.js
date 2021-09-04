import React from 'react'
import 'antd/dist/antd.css'

import AppHeader from "./components/header/header";
import AppHome from "./components/home/hero"

import { Layout} from 'antd';

const { Header, Content } = Layout;


const Landing = () => {
  return (
      <Layout className="mainLayout">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <AppHeader />
          </Header>
          <Content>
            <AppHome />
          </Content>
      </Layout>
  )
}

export default Landing
