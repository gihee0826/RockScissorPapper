import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
        <h1>{props.title}</h1>
        <img className="item-img" src="https://static.vecteezy.com/system/resources/previews/003/240/783/original/scissor-illustration-in-flat-design-vector.jpg"/>
        <h2>Win</h2>
    </div>
  )
}

export default Box