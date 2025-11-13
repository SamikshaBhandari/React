import React from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Welcome type="one" name="Samiksha"/>
    <div>Home</div>
    </>
  )
}
