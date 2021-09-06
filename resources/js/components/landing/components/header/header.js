import React from 'react'
import { Anchor } from 'antd'

const { Link } = Anchor
const AppHeader = () => {
  return (
        <div className="container-fluid">
            <div className='header'>
                <div className="logo" >
                    <Anchor>
                        <Link href={'#hero'} title={<img src={'/imgs/logo.png'} width={80}/>}/>
                    </Anchor>
                </div>
                <Anchor>
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#event" title="Event" />
                    <Link href="#forum" title="Forum" />
                    <Link href="#jobs" title="Jobs" />
                    <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
        </div>
  )
}

export default AppHeader
