import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileClass from './ProfileClass'
import { Component } from 'react'

class About extends Component{

  constructor(props){
    super(props)
    
  }

  
  render(){
    return (
      <div>
        <h1>This is about us portion</h1>
        <p>Vishnu Vardhan</p>
         <Outlet/>
         <ProfileClass name="First-Child"/>
      </div>
    )
  }
}

export default About
