import React from 'react'

// @ts-ignore
const Welcome = (props)=> {
    console.log(props.type,props.name)
    const type=props.type
    const name=props.name
  return (
    <>
    <div>{type}</div>
    <div>{name}</div>
    </>
  )
}

export default Welcome