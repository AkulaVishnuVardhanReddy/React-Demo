import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileClass from './ProfileClass'

const About = () => {
  return (
    <div>
      <h1>This is about us portion</h1>
      <p>Vishnu Vardhan</p>
       <Outlet/>
       <ProfileClass/>
    </div>
  )
}

export default About
