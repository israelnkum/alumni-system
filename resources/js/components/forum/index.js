import React from 'react'
import AllTopics from './all-topics'
import AppPageHeader from '../app-layout/app-page-header'
import TopicForm from './topic-form'

const Forum = () => {
  return (
        <React.Fragment>
            <AppPageHeader title={'Forum'}/>
            <TopicForm key={1}/>
            <AllTopics/>
        </React.Fragment>
  )
}
export default Forum
