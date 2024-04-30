import React from 'react'

const Comment = ({data}) => { 
    const {name, text} = data
  return (
    <div className='flex shadow-sm bg-gray-50 p-2 rounded-sm my-2'>
      <img
        className="w-16 h-12"
        alt="user-logo"
        src="https://devtalk.blender.org/uploads/default/original/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png"
      />
      <div className='px-3'>
        <div className='font-bold'>{name}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

export default Comment