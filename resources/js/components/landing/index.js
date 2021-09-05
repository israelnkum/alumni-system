import React from 'react'
import 'antd/dist/antd.css'

import AppHeader from './components/header/header'

import { Layout } from 'antd'
import AppHome from './views/home'
import { Route, Switch } from 'react-router'
import Forum from './components/forum'
import Details from './components/forum/details'
const { Header, Content } = Layout

const Landing = () => {
  return (
        <Layout className="mainLayout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <AppHeader />
            </Header>
            <Content>
                <Switch>
                    <Route exact path={'/'} component={AppHome}/>
                    <Route path={'/landing/forum/:topicName/:topicId'} exact component={Details}/>
                    <Route exact path={'/landing/forum'} component={Forum}/>
                </Switch>
            </Content>
        </Layout>
  )
}

export default Landing
